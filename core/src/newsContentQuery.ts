import axios from "axios";
import { API_NEWS } from "./constants";
import { NewsContent } from "./types/newsContentQuery";

export const grab_uid = async (id: string) => {
  const { data: html } = await axios.get(API_NEWS.endpoint(id));

  if (html === "Invalid nid!") {
    return { e: { error: true, detail: `${id} is an invalid news id.` } };
  }

  const result = (html as string).match(/var g_news_unique_id = "(\w+)"/);

  if (!result) {
    return {
      e: { error: true, detail: `cannot find an uid for news id:${id}` },
    };
  } else {
    return { uid: result[1] };
  }
};

export const newsContentQuery = async (
  id: string
): Promise<{
  data?: NewsContent;
  error?: boolean;
  warn?: boolean;
  detail?: string;
}> => {
  const { uid, e: error } = await grab_uid(id);
  if (error) return error;

  const {
    //@ts-ignore tsc lint is yelling at me.
    data: [data, ..._],
  } = await axios.get<NewsContent[]>(API_NEWS.endpoint(id, uid));
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
