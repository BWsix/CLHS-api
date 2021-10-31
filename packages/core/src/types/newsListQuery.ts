export type QueryParams = {
  field: "time";
  order: "DESC";
  pageNum: number;
  maxRows: number;
  keyword: string;
  uid: QueryUID;
  tf: 1;
  auth_type: "user";
  use_cache: 1;
};

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
  attr_name: AttrName;
  title: string;
  title_color: string;
  unit: string;
  unit_name: UnitName;
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

export enum QueryUID {
  首頁 = "WID_549_2_3e2e399a2649fb6ba9918090490f4741fd4453bf",
  升學資訊 = "WID_549_2_13cfc702096566ef38571aebe89498c49f56f236",
  新生專區 = "WID_284_2_74ade31d9f46e4440ca9b60301b5f651004cec49",
  校內競賽 = "WID_549_2_c0df1de1135dbf425a0f988515224a49c98ad257",
  校外競賽 = "WID_549_2_5d8f79c34d01e52061f469da52357fe253c45db9",
  衛生保健 = "WID_549_2_5cd5617d2dd2bc130e7f76c333f2d442dffd0681",
  法令公告 = "WID_549_2_09b16f4944d742185cf599bb45ca292da6547c9e",
  營隊研習 = "WID_549_2_0470a8e2b5755791156cb8f5d9af5e1b81db7168",
}

export type AttrName =
  | ""
  | "公告"
  | "升學資訊"
  | "研習營隊"
  | "校內競賽"
  | "校外競賽"
  | "通知"
  | "最新消息"
  | "榮譽榜"
  | "緊急"
  | "獎助學金"
  | "衛生保健";

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

export type UnitName =
  | "110教師甄試網站"
  | "人事室官網"
  | "中大壢中新首頁"
  | "中壢中學校友會"
  | "文書組"
  | "出納組"
  | "生輔組-防制學生藥物濫用"
  | "生輔組官網"
  | "全民國防教育"
  | "自主學習"
  | "防疫專區"
  | "活動組官網"
  | "音樂班"
  | "家長會官網"
  | "特教組官網"
  | "秘書室官網"
  | "訓育組官網"
  | "健康中心官網"
  | "庶務組官網"
  | "教務處官網"
  | "教學組官網"
  | "設備組官網"
  | "註冊組官網"
  | "新生專區"
  | "試務組官網"
  | "圖書館官網"
  | "輔導室官網"
  | "衛生組官網"
  | "學務處官網"
  | "總務處官網"
  | "體育組官網"
  | "athletic meet";
