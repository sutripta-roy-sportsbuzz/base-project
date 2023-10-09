import { Response, Request, NextFunction } from 'express';

export default class BaseController {
  constructor() {

  }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(201).json({ success: true, data: 'result from v1 create' });
    } catch (err) {
      next(err);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(200).json({ success: true, data: 'result from v1 get' });
    } catch (err) {
      next(err);
    }
  };

  public updateById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(200).json({ success: true, data: 'result from v1 patch' });
    } catch (err) {
      next(err);
    }
  };

  public deleteById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(200).json({ success: true, data: 'result from v1 delete' });
    } catch (err) {
      next(err);
    }
  };
}
