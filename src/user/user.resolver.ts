import {
  Resolver,
  Query,
  Args,
  ResolveReference,
  Mutation,
} from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // Query to fetch all users
  @Query(() => [User], { name: 'users' })
  async getUsers() {
    return this.userService.findAll();
  }

  // Query to fetch user by ID
  @Query(() => User, { name: 'user', nullable: true })
  async getUserById(@Args('id') id: number) {
    return this.userService.findById(id);
  }

  @Mutation(() => String)
  async createUser(@Args('input') input: CreateUserDto) {
    return this.userService.createUser(input);
  }
  // ResolveReference for Apollo Federation
  @ResolveReference()
  async resolveReference(reference: { __typename: string; id: number }) {
    return this.userService.findById(reference.id);
  }
}
