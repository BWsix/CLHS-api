import axios from "axios";
import { URLSearchParams } from "url";
import { API } from "../constants";
import { News } from "../types";
import { queryInputParser } from "./inputParser";
import { QueryInput, QueryResult, QueryResultMeta } from "./types";

export const newsListQuery = async (
  queryInput: QueryInput,
  cb?: (
    data: { queryMeta: QueryResultMeta; newsList: News[] },
    error?: string
  ) => void
) => {
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
};
