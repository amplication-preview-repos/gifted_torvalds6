import { JsonValue } from "type-fest";
import { Todo } from "../todo/Todo";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  todos?: Array<Todo>;
  updatedAt: Date;
  username: string;
};
