import { Sequelize } from 'sequelize';

class MySQLConnection {
  private static INSTANCE: Sequelize;

  static createMySQLConnection(database: string, username: string, password: string, dbDetails: object) {
    if (!this.INSTANCE) {
      this.INSTANCE = new Sequelize(database, username, password, dbDetails);
      console.log(`MySQL connected sucessfully with the database - ${database}`); // eslint-disable-line
    }
    return { Sequelize, sequelize: this.INSTANCE };
  }
}

export default MySQLConnection;
