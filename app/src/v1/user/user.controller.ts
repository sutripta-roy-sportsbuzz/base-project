import { Response, Request, NextFunction } from 'express';

import BaseController from '../../base/base.controller';
// import { BaseController } from '@sutriptaroy/base-package';

export default class UserController extends BaseController {
  constructor() {
    super()
  }

  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(200).json({ success: true, data: 'result from v1' });
    } catch (err) {
      next(err);
    }
  };

  public registration = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(200).json({ success: true, data: 'result from v1' });
    } catch (err) {
      next(err);
    }
  };
}
