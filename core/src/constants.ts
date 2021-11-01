import { QueryParamsInput, QueryUIDOptions } from "./types/newsListQuery";

export const API_NEWS_LIST = {
  endpoint:
    "https://www.clhs.tyc.edu.tw/ischool/widget/site_news/news_query_json.php",
  defaultParams: {
    auth_type: "user",
    field: "time",
    keyword: "",
    maxRows: 20,
    order: "DESC",
    pageNum: 0,
    tf: 1,
    uid: QueryUIDOptions.首頁,
    use_cache: 0,
  } as QueryParamsInput,
};

export const API_NEWS = {
  endpoint: (id: string, uid?: string) => {
    if (!uid) {
      return `https://www.clhs.tyc.edu.tw/ischool/public/news_view/show.php?nid=${id}`;
    } else {
      return `https://www.clhs.tyc.edu.tw/ischool/widget/site_news/news_query_json_content.php?nid=${id}&dir=0&uid=${uid}`;
    }
  },
};
