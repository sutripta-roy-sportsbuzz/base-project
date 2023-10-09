import { z } from "zod";

import { Responses } from '../../../enums/responses';

export const createSchema = z.object({
  username: z.string({
    required_error: Responses.USERNAME_REQUIRED,
    invalid_type_error: Responses.USERNAME_TYPE_ERROR,
  }),
  password: z.string({
    required_error: Responses.PASSWORD_REQUIRED,
    invalid_type_error: Responses.PASSWORD_TYPE_ERROR,
  }),
});

export type UserCreate = z.infer<typeof createSchema>;

export const identitySchema = z.object({
  id: z.string({
    required_error: Responses.ID_REQUIRED,
    invalid_type_error: Responses.ID_TYPE_ERROR,
  }),
});

export type UserIdentity = z.infer<typeof identitySchema>;
