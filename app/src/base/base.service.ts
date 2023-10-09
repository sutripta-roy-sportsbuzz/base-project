import { HttpException } from '../../libraries/HttpException';
import { HTTPStatus } from '../../enums/common';
import { Responses } from '../../enums/responses';

export default class BaseService<AttributesInputT, AttributesOutputT> {
  private dao: any;

  constructor(Dao: any) {
    this.dao = new Dao();
  }

  public create = async (payload: AttributesInputT): Promise<AttributesOutputT> => {
    const result: AttributesOutputT = await this.dao.create(payload);
    return result;
  };

  public getById = async (id: number): Promise<AttributesOutputT> => {
    const result: AttributesOutputT = await this.dao.getById(id);
    if (!result) throw new HttpException(HTTPStatus.NOT_FOUND, Responses.NO_DATA_BY_ID);
    return result;
  };

  public updateById = async (id: number, payload: any): Promise<AttributesOutputT> => {
    delete payload['id'];
    const result = await this.getById(id);
    if (!result) throw new HttpException(HTTPStatus.NOT_FOUND, Responses.NO_DATA_BY_ID);

    const updatedResult = await this.dao.updateById(id, payload);
    return updatedResult;
  };

  public deleteById = async (id: number): Promise<number> => {
    const result = await this.dao.getById(id);
    if (!result) throw new HttpException(HTTPStatus.NOT_FOUND, Responses.NO_DATA_BY_ID);
    return this.dao.deleteById(id);
  };
}
