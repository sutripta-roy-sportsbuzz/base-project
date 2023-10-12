import BaseSequelizeService from '../../base/baseSequelize.service';
import UserDao from './user.dao';
import UserRedisDao from './userRedis.dao';
import { UserModelInput, UserModelOutput } from '../../../models/user/user.model';

export default class UserService extends BaseSequelizeService<UserModelInput, UserModelOutput> {
  constructor() {
    super(UserDao, 'USER', UserRedisDao)
  }
}
