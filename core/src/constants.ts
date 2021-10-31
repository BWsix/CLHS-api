import { QueryParams, QueryUID } from "./types/newsListQuery";

export const API_NEWS_LIST = {
  endpoint:
    "https://www.clhs.tyc.edu.tw/ischool/widget/site_news/news_query_json.php",
  defaultParams: {
    auth_type: "user",
    field: "time",
    keyword: "",
    maxRows: 30,
    order: "DESC",
    pageNum: 0,
    tf: 1,
    uid: QueryUID.首頁,
    use_cache: 1,
  } as QueryParams,
};
