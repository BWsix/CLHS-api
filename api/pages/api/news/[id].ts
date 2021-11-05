import { newsContentQuery } from "@clhs-api/core";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET")
    return res.status(405).json({
      error: `${req.method!.toLowerCase()} request is not allowed.`,
    });

  const id = req.query.id as string;

  const result = await newsContentQuery(id);
  if (result.isOk()) {
    return res.status(200).json(result.value);
  }
  return res.status(400).json(result.error);
}
