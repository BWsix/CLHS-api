import axios from "axios";
import { URLSearchParams } from "url";
import { API_NEWS_LIST } from "./constants";
import {
  QueryParams,
  QueryParamsInput,
  QueryResult,
} from "./types/newsListQuery";

export const newsListQuery = async (queryParams?: QueryParamsInput) => {
  let flock = "";
  if (queryParams) {
    const { unit, attr } = queryParams;
    delete queryParams.unit;
    delete queryParams.attr;

    flock += `${unit}${unit ? `-${attr}` : attr}`;
  }

  //@ts-ignore
  const params: QueryParams = {
    ...API_NEWS_LIST.defaultParams,
    ...queryParams,
    flock,
  };

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
