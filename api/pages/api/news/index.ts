import { newsListQuery } from "@clhs-api/core";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const result = await newsListQuery();

  res.json(result);
}
