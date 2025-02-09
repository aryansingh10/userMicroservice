import { Resolver, Query, ResolveReference } from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'users' })
  async getUsers() {
    return this.userService.findAll();
  }

  @ResolveReference()
  async resolveReference(reference: { __typename: string; id: number }) {
    return this.userService.findById(reference.id);
  }
}
