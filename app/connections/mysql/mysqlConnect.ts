// import mysql from 'mysql';

// import { config } from '../../configs/config';

// export default class MySQLConnection {
//   public static CONNECTION: any;

//   constructor() {
//   }

//   static createMySQLConnection() {
//     if (!this.CONNECTION) {
//       this.CONNECTION = mysql.createPool({
//         host            : config.SQL_DB_HOST,
//         port            : config.SQL_DB_PORT,
//         user            : config.SQL_DB_PASSWORD,
//         password        : config.SQL_DB_PASSWORD,
//         database        : config.SQL_DB_NAME,
//         connectionLimit : config.SQL_CONNECTION_LIMIT
//       });
//     }
//     return this.CONNECTION;
//   }
// }
