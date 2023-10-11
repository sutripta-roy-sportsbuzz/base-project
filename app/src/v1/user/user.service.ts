import BaseService from '../../base/baseSequelize.service';
import UserDao from './user.dao';
import { UserModelInput, UserModelOutput } from '../../../models/user/user.model';

export default class UserService extends BaseService<UserModelInput, UserModelOutput> {
  constructor() {
    super(UserDao)
  }
}
