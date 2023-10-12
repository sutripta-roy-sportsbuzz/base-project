import { createClient } from 'redis';

import { AppConfig } from '../configs/config';

export default class RedisConnection {
  private static INSTANCE: any;

  static createRedisConnection() {
    if(!this.INSTANCE) {
      this.INSTANCE = createClient({
        password: AppConfig.REDIS_PASSWORD,
        socket: {
            host: AppConfig.REDIS_URL,
            port: AppConfig.REDIS_PORT,
        }
      })
      .on('error', err => console.log('Redis Client Creation Error', err))
      .connect();
    }
    return this.INSTANCE;
  }
}
