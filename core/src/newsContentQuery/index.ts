import axios from "axios";
import { API } from "../constants";
import { NewsContent, UID_Id } from "../types";
import { grab_uid } from "./grab_uid";

export const newsContentQuery = async (
  id: string,
  cb: (data: NewsContent, error?: string) => void
) => {
  let uid: UID_Id;
  try {
    uid = await grab_uid(id);
  } catch (e) {
    return cb({} as any, e as string);
  }

  const {
    // @ts-ignore tsc lint is yelling at me.
    data: [data, ..._],
  } = await axios.get<NewsContent[]>(API.NEWS.endpoint(id, uid));
  if (!data) return cb({} as any, "there's no data in the response object.");

  const content = data.content;
  try {
    data.content = !!!content ? content : decodeURIComponent(content);
  } catch (e) {
    // unable to decode some of the content, ignore this for now.
  }

  return cb(data);
};
