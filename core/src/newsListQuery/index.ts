import axios from "axios";
import { URLSearchParams } from "url";
import { API } from "../constants";
import { queryInputParser } from "./inputParser";
import { QueryInput, QueryResult } from "./types";

export const newsListQuery = async (queryInput?: QueryInput) => {
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

  const [queryMeta, ...newsList] = queryResult;

  return { queryMeta, newsList };
};
