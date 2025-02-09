import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'mysql',
  schema: './src/database/schema.ts',
  out: './drizzle/migrations',
  dbCredentials: {
    host: 'localhost',
    user: 'root',
    password: 'Aryan@1234',
    database: 'test',
  },
});
