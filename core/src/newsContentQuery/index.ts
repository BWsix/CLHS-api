import axios from "axios";
import { err, ok, Result } from "neverthrow";
import { API } from "../constants";
import { NewsContent, UID_Id } from "../types";
import { grab_uid } from "./grab_uid";

export const newsContentQuery = async (
  id: string
): Promise<Result<{ data: NewsContent; warn?: string }, { error: string }>> => {
  let uid: UID_Id;
  try {
    uid = await grab_uid(id);
  } catch (e) {
    return err({ error: e as string });
  }

  const {
    // @ts-ignore tsc lint is yelling at me.
    data: [data, ..._],
  } = await axios.get<NewsContent[]>(API.NEWS.endpoint(id, uid));
  if (!data) return err({ error: "there's no data in the response object." });

  const content = data.content;
  try {
    data.content = !!!content ? content : decodeURIComponent(content);
  } catch (e) {
    return ok({
      data,
      warn: "error occurred while decoding the content.",
    });
  }

  return ok({ data });
};
