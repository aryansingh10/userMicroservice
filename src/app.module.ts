import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
// import { ProductModule } from './product/product.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
        path: join(process.cwd(), 'src/graphql/schema.graphql'),
      },
    }),
    DatabaseModule,
    UserModule,
  ],
})
export class AppModule {}
