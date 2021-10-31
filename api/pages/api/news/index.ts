import { NextApiRequest, NextApiResponse } from "next";
import { NewsListQuery, QueryUID } from "@clhs-api/core";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const { newsList } = await NewsListQuery({ uid: QueryUID.首頁 });

  res.json(newsList);
}
