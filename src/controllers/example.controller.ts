import { Request, Response } from "express";
import { exampleServiceFunction } from "../services/example.service";

export async function indexExample(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {

  const serviceRes = exampleServiceFunction(987);

  return res.json({
    examples: serviceRes.rows,
    total: serviceRes.rowCount
  });
}
