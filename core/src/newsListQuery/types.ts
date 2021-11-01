import { ATTR_Name, News, UID_Id, UID_Name, UNIT_Name } from "../types";

export type QueryParams = {
  auth_type: "user";
  field: "time";
  flock?: string;
  keyword: string;
  maxRows: number;
  order: "DESC" | "ASC";
  pageNum: number;
  tf: 1;
  uid: UID_Id;
  use_cache: 0 | 1;
};

export type QueryInput = Partial<{
  attr: ATTR_Name;
  itemsPerPage: number;
  keyword: string;
  orderBy: "DESC" | "ASC";
  page: number;
  unit: UNIT_Name;
  useCache: boolean;
  where: UID_Name;
}>;

export type QueryResult = [QueryResultMeta, ...News[]];

export type QueryResultMeta = {
  pageNum: number;
  maxRows: number;
  totalPages: number;
};
