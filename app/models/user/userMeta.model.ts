import { DataTypes, Model, Optional } from 'sequelize';

import { sequelize } from '../../connections/sequelize/db_config';
import { BaseModelAttributes } from '../../interfaces/baseAttributes';

export interface UserMetaAtributes extends BaseModelAttributes {
  user_id: number;
  name: string;
  address: string;
  contact: string;
}

export interface UserMetaModelInput extends Optional<UserMetaAtributes, 'id' | 'created_at' | 'updated_at' | 'deleted_at'> {}
export interface UserMetaModelOutput extends Required<UserMetaAtributes> {}

class UserMetaModel extends Model {
  declare id: number;
  declare user_id: number;
  declare name: string;
  declare address: string;

  declare readonly created_at: Date;
  declare readonly updated_at: Date;
  declare readonly deleted_at: Date;
}

UserMetaModel.init(
  {
    id: { allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    user_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'users', key: 'id' } },
    name: { type: DataTypes.STRING(70), allowNull: true },
    city: { type: DataTypes.STRING(50), allowNull: true },
    image_url: { type: DataTypes.STRING(500), allowNull: true },
  },
  {
    sequelize: sequelize,
    paranoid: true,
    modelName: 'user_meta',
    timestamps: true,
    deletedAt: 'deleted_at',
  },
);

export default UserMetaModel;
