import { Request, Response } from "express";
import { exampleService } from "../services/example.service";

export async function indexExample(req: Request, res: Response) {

  const serviceRes = exampleService(987);

  return res.json({
    examples: serviceRes.rows,
    total: serviceRes.rowCount
  });
}
