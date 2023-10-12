import mongoose from 'mongoose';

import { AppConfig } from '../configs/config';

export default class MongoDBConnection {
  public static INSTANCE: any;

  static createMongoDBConnection() {
    if (!this.INSTANCE) {
      this.INSTANCE = mongoose.connect(AppConfig.MONGO_DB_URL);
      console.log(`MongoDB connected sucessfully with DB - ${AppConfig.MONGO_DB_NAME}`);
    }
    return this.INSTANCE;
  }
}
