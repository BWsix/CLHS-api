import axios from "axios";
import { URLSearchParams } from "url";
import { API } from "../constants";
import { queryInputParser } from "./inputParser";
import {
  NewsListQueryCB,
  NewsListQueryResult,
  QueryInput,
  QueryResult,
} from "./types";

/**
 * 取得新聞列表
 * @param queryInput 預設為`首頁`的前`20`則新聞
 */
export async function newsListQuery(
  queryInput?: QueryInput
): Promise<NewsListQueryResult>;
export async function newsListQuery(
  queryInput: QueryInput,
  cb: NewsListQueryCB
): Promise<void>;
export async function newsListQuery(
  queryInput?: QueryInput,
  cb?: NewsListQueryCB
) {
  const params = queryInputParser(queryInput || {});

  const { data: queryResult } = await axios.post<QueryResult>(
    API.NEWS_LIST.endpoint,
    //@ts-ignore
    new URLSearchParams(params).toString(),
    {
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    }
  );

  if (typeof queryResult === "string") {
    const errMsg = `error from clhs api(might be wrong input type). error message: ${queryResult}`;
    if (cb) return cb({} as any, errMsg);
    throw errMsg;
  }

  const [queryMeta, ...newsList] = queryResult;
  queryMeta.params = params;
  const result = { queryMeta, newsList };

  return cb ? cb(result) : result;
}
