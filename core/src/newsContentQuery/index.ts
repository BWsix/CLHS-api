import axios from "axios";
import { API } from "../constants";
import { NewsContent, UID_Id } from "../types";
import { grab_uid } from "./grab_uid";

export const newsContentQuery = async (
  id: string,
  cb?: (data: NewsContent, error?: string) => void
) => {
  let uid: UID_Id;
  try {
    uid = await grab_uid(id);
  } catch (e) {
    if (cb) return cb({} as any, e as string);
    throw e;
  }

  const {
    // @ts-ignore tsc lint is yelling at me.
    data: [data, ..._],
  } = await axios.get<NewsContent[]>(API.NEWS.endpoint(id, uid));
  if (!data) {
    const errMsg = "there's no data in the response object.";
    if (cb) return cb({} as any, errMsg);
    throw errMsg;
  }

  const content = data.content;
  try {
    data.content = !!!content ? content : decodeURIComponent(content);
  } catch (e) {
    // unable to decode some of the content, ignore this for now.
  }

  return cb ? cb(data) : data;
};
