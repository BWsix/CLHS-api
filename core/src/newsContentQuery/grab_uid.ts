import axios from "axios";
import { API } from "../constants";
import { UID_Id } from "../types";

export const grab_uid = async (id: string) => {
  const { data: html } = await axios.get(API.NEWS.endpoint(id));
  if (html === "Invalid nid!") throw `${id} is an invalid news id.`;

  const result = (html as string).match(/var g_news_unique_id = "(\w+)"/);
  if (!result) throw `cannot find an uid for news id:${id}`;

  return result[1] as UID_Id;
};
