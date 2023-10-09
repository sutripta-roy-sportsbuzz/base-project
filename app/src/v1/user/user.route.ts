import UserController from './user.controller';
import BaseRouter from '../../base/base.routes';
// import { BaseRouter } from '@sutriptaroy/base-package';
import { createSchema, identitySchema } from './user.dto';

export default class UserRouterV1 extends BaseRouter {
  constructor() {
    super(UserController, {
      post: {
        validationSchema: createSchema,
        validationKey: 'body'
      },
      get: {
        validationSchema: identitySchema,
        validationKey: 'params'
      },
      patch: {
        validationSchema: identitySchema,
        validationKey: 'params'
      },
      delete: {
        validationSchema: identitySchema,
        validationKey: 'params'
      }
    })

    this.initializeRoutes();
  }

  initializeRoutes = (): void => {
    this.router.route('/login').post(this.controller.login);
    this.router.route('/registration').post(this.controller.registration);
  }
}
