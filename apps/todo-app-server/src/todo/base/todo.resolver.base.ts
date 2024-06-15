/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Todo } from "./Todo";
import { TodoCountArgs } from "./TodoCountArgs";
import { TodoFindManyArgs } from "./TodoFindManyArgs";
import { TodoFindUniqueArgs } from "./TodoFindUniqueArgs";
import { CreateTodoArgs } from "./CreateTodoArgs";
import { UpdateTodoArgs } from "./UpdateTodoArgs";
import { DeleteTodoArgs } from "./DeleteTodoArgs";
import { User } from "../../user/base/User";
import { TodoService } from "../todo.service";
@graphql.Resolver(() => Todo)
export class TodoResolverBase {
  constructor(protected readonly service: TodoService) {}

  async _todosMeta(
    @graphql.Args() args: TodoCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Todo])
  async todos(@graphql.Args() args: TodoFindManyArgs): Promise<Todo[]> {
    return this.service.todos(args);
  }

  @graphql.Query(() => Todo, { nullable: true })
  async todo(@graphql.Args() args: TodoFindUniqueArgs): Promise<Todo | null> {
    const result = await this.service.todo(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Todo)
  async createTodo(@graphql.Args() args: CreateTodoArgs): Promise<Todo> {
    return await this.service.createTodo({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Todo)
  async updateTodo(@graphql.Args() args: UpdateTodoArgs): Promise<Todo | null> {
    try {
      return await this.service.updateTodo({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Todo)
  async deleteTodo(@graphql.Args() args: DeleteTodoArgs): Promise<Todo | null> {
    try {
      return await this.service.deleteTodo(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Todo): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
