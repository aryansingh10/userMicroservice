import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  await app.listen(3001);
  console.log('User service is running on http://localhost:3001/graphql');
}
bootstrap();
