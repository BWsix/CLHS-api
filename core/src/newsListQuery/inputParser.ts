import { ATTR_Name, UNIT_Name } from "src/types";
import { Options } from "../constants";
import { QueryInput, QueryParams } from "./types";

const flockParser = (_attr?: ATTR_Name, _unit?: UNIT_Name) => {
  const attr = _attr ? Options.ATTR[_attr] : null;
  const unit = _unit ? Options.UNIT[_unit] : null;

  const flock = `${unit || ""}${unit && attr ? "-" : ""}${attr || ""}`;
  return flock || null;
};

export const queryInputParser = (queryInput: QueryInput) => {
  const {
    attr,
    itemsPerPage,
    keyword,
    orderBy,
    page,
    unit,
    useCache,
    where,
  } = queryInput;

  return {
    auth_type: "user",
    field: "time",
    flock: flockParser(attr, unit),
    keyword: keyword || "",
    maxRows: itemsPerPage || 20,
    order: orderBy || "DESC",
    pageNum: page || 0,
    tf: 1,
    uid: where ? Options.UID[where] : Options.UID.首頁,
    use_cache: useCache ? 1 : 0,
  } as QueryParams;
};
