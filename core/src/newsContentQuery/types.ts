import { UNIT_Id, UNIT_Name } from "../types";

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
