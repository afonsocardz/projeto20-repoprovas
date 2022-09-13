import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export async function errorHandler(error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
  console.log(error);
  res.status(500).send(error);
}