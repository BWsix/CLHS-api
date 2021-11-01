import { newsListQuery } from "@clhs-api/core";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      return res.json(await newsListQuery());

    case "POST":
      const params = req.body;
      return res.json(await newsListQuery(params));

    default:
      return res.status(405).json({
        error: true,
        detail: `${req.method!.toLowerCase()} request is not allowed.`,
      });
  }
}
