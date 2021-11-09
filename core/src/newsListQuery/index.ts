import axios from "axios";
import { URLSearchParams } from "url";
import { API } from "../constants";
import { News } from "../types";
import { queryInputParser } from "./inputParser";
import { QueryInput, QueryResult, QueryResultMeta } from "./types";

export const newsListQuery = async (
  queryInput: QueryInput,
  cb: (
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
    return cb(
      {} as any,
      `error from clhs api(might be wrong input type). error message: ${queryResult}`
    );
  }

  const [queryMeta, ...newsList] = queryResult;
  queryMeta.params = params;
  if (!newsList.length) return cb({} as any, "no news can be found.");

  return cb({ queryMeta, newsList });
};
