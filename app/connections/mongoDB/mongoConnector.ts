import MongoDBConnection from './mongoDbConnection';

export default class MongoConnector {
  static getMongoConnection() {
    return MongoDBConnection.createMongoDBConnection();
  }
}
