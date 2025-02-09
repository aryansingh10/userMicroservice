import { Injectable, Inject } from '@nestjs/common';
import { users } from '../database/schema';
import { DrizzleClient } from './types';
import { eq, sql } from 'drizzle-orm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: DrizzleClient,
  ) {}

  async findAll() {
    return await this.db.select().from(users);
  }

  async findById(id: number) {
    const [user] = await this.db
      .select()
      .from(users)
      .where(sql`${users.id} = ${id}`);
    return user;
  }

  async createUser(input: CreateUserDto): Promise<string> {
    const result = await this.db.insert(users).values(input).execute();

    if (!result || !result[0]?.insertId) {
      throw new Error('User creation failed');
    }

    return `User created successfully with ID: ${result[0].insertId}`;
  }
}
