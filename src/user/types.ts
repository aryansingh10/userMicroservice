import { drizzle } from 'drizzle-orm/mysql2';

export type DrizzleClient = ReturnType<typeof drizzle>;
