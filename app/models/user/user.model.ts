import { DataTypes, Model, Optional } from 'sequelize';

import { sequelize } from '../../connections/sequelize/db_config';
import { BaseModelAttributes } from '../../interfaces/baseAttributes';

export interface UserAttributes extends BaseModelAttributes {
  username: string;
  password: string;
}

export interface UserModelInput extends Optional<UserAttributes, 'id' | 'created_at' | 'updated_at' | 'deleted_at'> {}
export interface UserModelOutput extends Required<UserAttributes> {}

class UserModel extends Model {
  declare username: string;
  declare password: string;

  declare readonly created_at: Date;
  declare readonly updated_at: Date;
  declare readonly deleted_at: Date;
}

UserModel.init(
  {
    id: { allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    username: { type: DataTypes.STRING(24), allowNull: false },
    password: { type: DataTypes.STRING(80), allowNull: false }
  },
  {
    sequelize: sequelize,
    paranoid: true,
    modelName: 'users',
    timestamps: true,
    deletedAt: 'deleted_at',
  },
);

export default UserModel;
