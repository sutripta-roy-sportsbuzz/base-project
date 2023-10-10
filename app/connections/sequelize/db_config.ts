import { Dialect } from 'sequelize';

import MySQLConnection from './sequelizeConnect';
import { AppConfig } from '../../configs/config';

const mySQLConnection = MySQLConnection.createMySQLConnection(AppConfig.SQL_DB_NAME, AppConfig.SQL_DB_USERNAME, AppConfig.SQL_DB_PASSWORD, {
  logging: false,
  host: AppConfig.SQL_DB_HOST,
  port: AppConfig.SQL_DB_PORT,
  dialect: AppConfig.SQL_DIALECT as Dialect,
  timezone: '+05:30',
  pool: {
    max: AppConfig.SQL_MAX_POOL,
    min: AppConfig.SQL_MIN_POOL,
    acquire: AppConfig.SQL_AQUIRE,
    idle: AppConfig.SQL_IDLE,
  },
});
const Sequelize = mySQLConnection.Sequelize;
const sequelize = mySQLConnection.sequelize;

export { Sequelize, sequelize };
