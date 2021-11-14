import { $Keys, $Values } from "utility-types";
import { Options } from "./constants";

export type UID_Name = $Keys<typeof Options.UID>;
export type UID_Id = $Values<typeof Options.UID>;

export type ATTR_Name = $Keys<typeof Options.ATTR>;
export type ATTR_Id = $Values<typeof Options.ATTR>;

export type UNIT_Name = $Keys<typeof Options.UNIT>;
export type UNIT_Id = $Values<typeof Options.UNIT>;

export type News = {
  newsId: string;
  top: 0 | 1;
  time: string;
  attr: ATTR_Name;
  attr_name: ATTR_Name;
  title: string;
  title_color: string;
  unit: UNIT_Name;
  unit_name: UNIT_Name;
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

  // additional data
  link: string;
};

export type NewsContent = {
  attachedfile: string;
  attrId: string;
  content_type: string;
  content: string;
  issuer: string;
  newsId: string;
  permission: string;
  rcode: number;
  resources: string;
  tag_show: number;
  tags: string[];
  time: Date;
  title: string;
  uid: string;
  unit: UNIT_Name;
  unitId: UNIT_Id;
};

type Name =
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
