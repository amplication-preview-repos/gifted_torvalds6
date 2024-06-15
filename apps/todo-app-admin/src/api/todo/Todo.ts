import { User } from "../user/User";

export type Todo = {
  completed: boolean | null;
  createdAt: Date;
  description: string | null;
  dueDate: Date | null;
  id: string;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
