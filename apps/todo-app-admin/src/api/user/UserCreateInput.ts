import { InputJsonValue } from "../../types";
import { TodoCreateNestedManyWithoutUsersInput } from "./TodoCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  todos?: TodoCreateNestedManyWithoutUsersInput;
  username: string;
};
