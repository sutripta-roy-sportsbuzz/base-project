export const config = {
  SQL_DB_HOST: process.env.SQL_DB_HOST,
  SQL_DB_PORT: Number(process.env.SQL_DB_PORT || 3306),
  SQL_DB_NAME: String(process.env.SQL_DB_NAME),
  SQL_DB_USERNAME: String(process.env.SQL_DB_USERNAME),
  SQL_DB_PASSWORD: String(process.env.SQL_DB_PASSWORD),
  SQL_DIALECT: process.env.SQL_DIALECT || 'mysql',
  SQL_MAX_POOL: process.env.SQL_MAX_POOL || 10,
  SQL_MIN_POOL: process.env.SQL_MIN_POOL || 5,
  SQL_CONNECTION_LIMIT: Number(process.env.SQL_CONNECTION_LIMIT || 10),
  SQL_MAX_TIMEOUT: process.env.SQL_MAX_TIMEOUT || 5000,
  SQL_AQUIRE: process.env.SQL_AQUIRE,
  SQL_IDLE: process.env.SQL_IDLE,
}
