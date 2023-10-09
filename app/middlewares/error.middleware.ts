import { NextFunction, Request, Response } from 'express';

import { HttpException } from '../libraries/HttpException';
import { Responses } from '../enums/responses';
// import logger from '@logging/winstonLogger';

const HandleHTTPErrors = (err: HttpException, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof HttpException) {
    try {
      const status: number = err.status || 500;
      const error: string = err.message || 'Something went wrong';
      // logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${error}`);
      return res.status(status).json({ success: false, error: error });
    } catch (error) {
      next(error);
    }
  } else {
    next(err);
  }
};

const HandleGeneralErrors = (err: any, _req: any, res: Response, _next: NextFunction) => {
  console.log(err);
  // if (process.env.NODE_ENV === 'production') Sentry.captureMessage(err);
  // Sentry.captureMessage(err);
  return res.status(500).send({ success: false, error: Responses.INTERNAL_SERVER_ERROR })
}

export { HandleHTTPErrors, HandleGeneralErrors };
