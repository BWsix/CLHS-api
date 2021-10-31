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

export type QueryUnitNames = keyof typeof QueryUnitOptions;
export enum QueryUnitOptions {
  設備組官網 = "unit_27",
  資訊媒體組 = "unit_29",
  活動組官網 = "unit_31",
  主計室官網 = "unit_32",
  教學組官網 = "unit_33",
  註冊組官網 = "unit_34",
  試務組官網 = "unit_35",
  訓育組官網 = "unit_38",
  文書組 = "unit_41",
  出納組 = "unit_42",
  庶務組官網 = "unit_43",
  人事室官網 = "unit_44",
  教務處官網 = "unit_50",
  學務處官網 = "unit_53",
  學務處官網_duplicated1 = "unit_54",
  舊輔導室官網 = "unit_55",
  學務處官網_duplicated2 = "unit_56",
  特教組官網 = "unit_57",
  衛生組官網 = "unit_61",
  生輔組官網 = "unit_62",
  秘書室官網 = "unit_63",
  中壢中學校友會 = "unit_64",
  學務處官網_duplicated3 = "unit_65",
  學務處官網_duplicated4 = "unit_66",
  學務處官網_duplicated5 = "unit_67",
  學務處官網_duplicated6 = "unit_68",
  總務處官網 = "unit_69",
  總務處官網_duplicated_1 = "unit_70",
  總務處官網_duplicated_2 = "unit_71",
  健康中心官網 = "unit_75",
  家長會官網 = "unit_79",
  教師甄選 = "unit_91",
  "" = "unit_96",
  輔導室官網 = "unit_104",
  "生輔組-防制學生藥物濫用" = "unit_117",
  總務處官網_duplicated = "unit_137",
  十二年國教 = "unit_140",
  翻轉與突破優質化計畫 = "unit_153",
  校園食品安全專區 = "unit_154",
  學習中心 = "unit_155",
  新生專區 = "unit_156",
  圖書館官網 = "unit_399",
  壢崗文教基金會 = "unit_403",
  "athletic meet" = "unit_405",
  自主學習 = "unit_409",
  "108選課輔導手冊" = "unit_413",
  "108年專業群科評鑑" = "unit_414",
  "110教師甄試網站" = "unit_422",
  教師甄選成績查詢 = "unit_423",
  "109選課輔導手冊" = "unit_424",
  中大壢中新首頁 = "unit_425",
  數理資優班 = "unit_430",
}
