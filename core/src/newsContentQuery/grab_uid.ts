import axios from "axios";
import { API } from "../constants";
import { UID_Id } from "../types";

export const grab_uid = async (
  id: string
): Promise<{
  uid?: UID_Id;
  e?: { error: true; detail: string };
}> => {
  const { data: html } = await axios.get(API.NEWS.endpoint(id));

  if (html === "Invalid nid!") {
    return { e: { error: true, detail: `${id} is an invalid news id.` } };
  }

  const result = (html as string).match(/var g_news_unique_id = "(\w+)"/);

  if (!result) {
    return {
      e: { error: true, detail: `cannot find an uid for news id:${id}` },
    };
  } else {
    return { uid: result[1] as UID_Id };
  }
};
