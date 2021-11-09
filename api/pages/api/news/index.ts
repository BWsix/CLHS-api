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
      return newsListQuery(params, async (data, error) => {
        if (error) return res.status(400).json(error);

        return res.status(200).json(data);
      });
    }

    default: {
      return res.status(405).json({
        error: `${req.method!.toLowerCase()} request is not allowed.`,
      });
    }
  }
}
