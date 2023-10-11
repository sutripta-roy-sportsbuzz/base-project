import MongoDBConnection from './mongoDbConnection';

export default class MongoConnector {
  getMongoConnection() {
    return MongoDBConnection.createMongoDBConnection();
  }
}
