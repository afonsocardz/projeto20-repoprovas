import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { errorTypeToStatusCode, isAppError } from '../utils/errorUtils';

export async function errorHandler(error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
  console.log('Ooops! An error occured!', error);

  if (isAppError(error)) {
    const statusCode = errorTypeToStatusCode(error.type);
    return res.status(statusCode).send(error.message);
  }

  res.sendStatus(500);
}
