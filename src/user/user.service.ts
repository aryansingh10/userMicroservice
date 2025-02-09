import { Injectable, Inject } from '@nestjs/common';
import { users } from '../database/schema';
import { DrizzleClient } from './types';
import { sql } from 'drizzle-orm';

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
}
