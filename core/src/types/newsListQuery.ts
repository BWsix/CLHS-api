import { QueryUnitNames, QueryUnitOptions } from "./shared";

export type QueryParams = {
  auth_type: "user";
  field: "time";
  flock?: string;
  keyword: string;
  maxRows: number;
  order: "DESC" | "ASC";
  pageNum: number;
  tf: 1;
  uid: QueryUIDOptions;
  use_cache: 0 | 1;
};

export interface QueryParamsInput extends Partial<Omit<QueryParams, "flock">> {
  attr?: QueryAttrOptions;
  unit?: QueryUnitOptions;
}

export type QueryResult = [QueryResultMeta, ...QueryResultNews[]];

export type QueryResultMeta = {
  pageNum: number;
  maxRows: number;
  totalPages: number;
};

export type QueryResultNews = {
  newsId: string;
  top: 0 | 1;
  time: string;
  attr: string;
  attr_name: QueryAttrNames;
  title: string;
  title_color: string;
  unit: string;
  unit_name: QueryUnitNames;
  issuer: string;
  name: Name;
  clicks: string;
  content_type: "content" | "url";
  content: null | string;
  is_sync: number;
  d_confirm: number;
  permission: string;
  news_image: string;
  news_image_width: number;
  news_image_height: number;
};

export type QueryAttrNames = keyof typeof QueryAttrOptions;
export enum QueryAttrOptions {
  全部 = "",
  公告 = "attr_1",
  通知 = "attr_2",
  最新消息 = "attr_3",
  緊急 = "attr_4",
  校內競賽 = "attr_5",
  校外競賽 = "attr_6",
  獎助學金 = "attr_7",
  榮譽榜 = "attr_8",
  "" = "attr_9",
  研習營隊 = "attr_10",
  衛生保健 = "attr_11",
  升學資訊 = "attr_12",
  法令公告 = "attr_13",
}

export enum QueryUIDOptions {
  壢中新聞 = "WID_549_29_6b87c0e5ed0f8ecb2694390de5e69cc1d48ef84",
  首頁 = "WID_549_2_3e2e399a2649fb6ba9918090490f4741fd4453bf",
  升學資訊 = "WID_549_2_13cfc702096566ef38571aebe89498c49f56f236",
  新生專區 = "WID_284_2_74ade31d9f46e4440ca9b60301b5f651004cec49",
  校內競賽 = "WID_549_2_c0df1de1135dbf425a0f988515224a49c98ad257",
  校外競賽 = "WID_549_2_5d8f79c34d01e52061f469da52357fe253c45db9",
  衛生保健 = "WID_549_2_5cd5617d2dd2bc130e7f76c333f2d442dffd0681",
  法令公告 = "WID_549_2_09b16f4944d742185cf599bb45ca292da6547c9e",
  營隊研習 = "WID_549_2_0470a8e2b5755791156cb8f5d9af5e1b81db7168",
}

export type Name =
  | "人事室"
  | "文書組"
  | "出納組"
  | "生輔組"
  | "活動組"
  | "校友會"
  | "特教組"
  | "秘書"
  | "訓育組"
  | "健康中心"
  | "庶務組"
  | "教學組"
  | "設備組"
  | "註冊組"
  | "黃憲銘"
  | "試務組"
  | "資訊媒體組"
  | "輔導資料組"
  | "劉康盟"
  | "衛生組"
  | "學務處"
  | "讀者服務組"
  | "體育組";
