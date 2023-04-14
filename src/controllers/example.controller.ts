import { Request, Response } from "express";

export async function indexExample(req: Request, res: Response) {
  return res.json({
    examples: [],
    total: 0
  });
}
