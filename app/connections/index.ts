import RedisConnection from './redis';
import MongoDBConnection from './mongo';

export default class ConnectionsInitiator {
  static async initConnections() {
    await RedisConnection.createRedisConnection();
    await MongoDBConnection.createMongoDBConnection();
  }
}
