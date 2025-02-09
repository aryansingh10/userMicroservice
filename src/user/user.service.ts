import { Injectable, Inject } from '@nestjs/common';
import { users } from '../database/schema';
import { DrizzleClient } from './types';

@Injectable()
export class UserService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: DrizzleClient,
  ) {}

  async findAll() {
    return await this.db.select().from(users);
  }
}
