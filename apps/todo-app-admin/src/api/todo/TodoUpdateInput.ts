import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TodoUpdateInput = {
  completed?: boolean | null;
  description?: string | null;
  dueDate?: Date | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
