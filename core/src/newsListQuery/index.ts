import axios from "axios";
import { err, ok, Result } from "neverthrow";
import { URLSearchParams } from "url";
import { API } from "../constants";
import { News } from "../types";
import { queryInputParser } from "./inputParser";
import { QueryInput, QueryResult, QueryResultMeta } from "./types";

export const newsListQuery = async (
  queryInput?: QueryInput
): Promise<Result<
  { data: { queryMeta: QueryResultMeta; newsList: News[] } },
  string
>> => {
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
    return err(
      `error from clhs api(might be wrong input type). error message: ${queryResult}`
    );
  }

  const [queryMeta, ...newsList] = queryResult;
  queryMeta.params = params;
  if (!newsList.length) return err("no news can be found.");

  return ok({ data: { queryMeta, newsList } });
};
