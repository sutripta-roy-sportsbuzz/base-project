import mongoose from 'mongoose';

import { AppConfig } from '../../configs/config';

export default class MongoDBConnection {
  private static INSTANCE: any;

  static createMongoDBConnection() {
    if (!this.INSTANCE) {
      this.INSTANCE = mongoose.connect(AppConfig.MONGO_DB_URL);
      console.log('MongoDB connected sucessfully');
    }
    return this.INSTANCE;
  }
}
