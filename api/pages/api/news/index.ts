import { newsListQuery } from "@clhs-api/core";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
    case "POST": {
      const params = req.body;
      const result = await newsListQuery(params);

      if (result.isOk()) return res.status(200).json(result.value);
      return res.status(400).json(result.error);
    }

    default: {
      return res.status(405).json({
        error: `${req.method!.toLowerCase()} request is not allowed.`,
      });
    }
  }
}
