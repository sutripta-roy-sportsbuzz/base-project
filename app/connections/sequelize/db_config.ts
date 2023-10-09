import { Dialect } from 'sequelize';

import MySQLConnection from './sequelizeConnect';
import { config } from '../../configs/config';

const mySQLConnection = MySQLConnection.createMySQLConnection(config.SQL_DB_NAME, config.SQL_DB_USERNAME, config.SQL_DB_PASSWORD, {
  logging: false,
  host: config.SQL_DB_HOST,
  port: config.SQL_DB_PORT,
  dialect: config.SQL_DIALECT as Dialect,
  timezone: '+05:30',
  pool: {
    max: config.SQL_MAX_POOL,
    min: config.SQL_MIN_POOL,
    acquire: config.SQL_AQUIRE,
    idle: config.SQL_IDLE,
  },
});
const Sequelize = mySQLConnection.Sequelize;
const sequelize = mySQLConnection.sequelize;

export { Sequelize, sequelize };
