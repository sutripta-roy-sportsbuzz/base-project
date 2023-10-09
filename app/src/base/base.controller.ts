import { Response, Request, NextFunction } from 'express';

export default class BaseController {
  public service: any;

  constructor(Service: any) {
    this.service = new Service();
  }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.service.create(req.body);
      return res.status(201).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: number = Number((req.params as any).id);
      const result = await this.service.getById(id);
      return res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  };

  public updateById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: number = Number((req.params as any).id);
      const result = await this.service.updateById(id, req.body);
      return res.status(200).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  };

  public deleteById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: number = Number((req.params as any).id);
      await this.service.deleteById(id);
      return res.status(200).json({ success: true });
    } catch (err) {
      next(err);
    }
  };
}
