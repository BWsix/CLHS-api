import axios from "axios";
import { URLSearchParams } from "url";
import { API_NEWS_LIST } from "./constants";
import type { QueryParams, QueryResult } from "./types/newsListQuery";

export const NewsListQuery = async (queryParams?: Partial<QueryParams>) => {
  const params = { ...API_NEWS_LIST.defaultParams, ...queryParams };

  const { data: queryResult } = await axios.post<QueryResult>(
    API_NEWS_LIST.endpoint,
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
