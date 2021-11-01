import axios from "axios";
import { API } from "../constants";
import { grab_uid } from "./grab_uid";
import { NewsContent } from "./types";

export const newsContentQuery = async (
  id: string
): Promise<{
  data?: NewsContent;
  error?: boolean;
  warn?: boolean;
  detail?: string;
}> => {
  const { uid, e } = await grab_uid(id);
  if (e) return e;

  const {
    // @ts-ignore tsc lint is yelling at me.
    data: [data, ..._],
  } = await axios.get<NewsContent[]>(API.NEWS.endpoint(id, uid!));
  if (!data)
    return {
      error: true,
      detail: "there's no data in the response object.",
    };

  const content = data.content;
  try {
    data.content = !!!content ? content : decodeURIComponent(content);
  } catch (e) {
    return {
      data,
      warn: true,
      detail: "error occurred while decoding the content.",
    };
  }

  return { data };
};
