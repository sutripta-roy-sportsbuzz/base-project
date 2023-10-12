import { HttpException } from '../../libraries/HttpException';
import { HTTPStatus } from '../../enums/common';
import { Responses } from '../../enums/responses';
import { AppConstants } from 'configs/constants';

export default class BaseSequelizeService<AttributesInputT, AttributesOutputT> {
  public dao: any;
  public cacheEnabled: boolean = false;
  public cacheClassObject: any;
  public moduleName: any;

  constructor(Dao: any, moduleName: string, RedisDao: any | null = null) {
    this.dao = new Dao();
    this.moduleName = moduleName;
    this.cacheEnabled = AppConstants.MODULE_WITH_CACHE[this.moduleName.toUpperCase() as keyof object] ? true : false;

    if (this.cacheEnabled) {
      this.cacheClassObject = new RedisDao()
    }
  }

  public create = async (payload: AttributesInputT): Promise<AttributesOutputT> => {
    const result: AttributesOutputT = await this.dao.create(payload);
    if (this.cacheEnabled) {
      this.createCacheWithRedis(result)
    }
    return result;
  };

  public getById = async (id: number, useCache: boolean = true): Promise<AttributesOutputT> => {
    if (this.cacheEnabled && useCache) {
      const result = await this.getCacheWithRedis(id);
      if (result) {
        return JSON.parse(result)
      }
    }
    const result: AttributesOutputT = await this.dao.getById(id);
    if (!result) throw new HttpException(HTTPStatus.NOT_FOUND, Responses.NO_DATA_BY_ID);
    if (this.cacheEnabled && useCache) {
      this.createCacheWithRedis(result)
    }
    return result;
  };

  public updateById = async (id: number, payload: any): Promise<AttributesOutputT> => {
    delete payload['id'];
    const result = await this.getById(id, false);
    if (!result) throw new HttpException(HTTPStatus.NOT_FOUND, Responses.NO_DATA_BY_ID);

    const updatedResult = await this.dao.updateById(id, payload);
    if (this.cacheEnabled) {
      this.deleteCacheWithRedis(id)
      this.createCacheWithRedis(updatedResult)
    }
    return updatedResult;
  };

  public deleteById = async (id: number): Promise<number> => {
    const result = await this.dao.getById(id, false);
    if (!result) throw new HttpException(HTTPStatus.NOT_FOUND, Responses.NO_DATA_BY_ID);
    const deleted = await this.dao.deleteById(id);
    if (this.cacheEnabled) {
      this.deleteCacheWithRedis(id)
    }
    return deleted;
  };

  private createCacheWithRedis = (result: any) => {
    this.cacheClassObject.createWithHash(this.moduleName, result.id, JSON.stringify(result));
  }

  private getCacheWithRedis = (id: number) => {
    return this.cacheClassObject.getWithHash(this.moduleName, id);
  }

  private deleteCacheWithRedis = (id: number) => {
    this.cacheClassObject.deleteWithHash(this.moduleName, id);
  }
}
