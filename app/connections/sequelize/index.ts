import { DataTypes } from 'sequelize';

import { Sequelize, sequelize } from './db_config';
import UserModel from '../../models/user/user.model';
import UserMetaModel from '../../models/user/userMeta.model';

const db: any = {};

//instance
db.User = UserModel;
db.UserMeta = UserMetaModel;

db.User.UserMeta = db.User.hasOne(db.UserMeta, { foreignKey: 'user_id', type: DataTypes.INTEGER, allowNull: false, onUpdate: 'CASCADE' });
db.UserMeta.User = db.UserMeta.belongsTo(db.User, { foreignKey: { name: 'user_id', type: DataTypes.INTEGER, allowNull: false } });

// "force: true" creates tables everytime server gets restarted. "force: false" doesn't create already existing tables.
sequelize.sync({ force: false });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
