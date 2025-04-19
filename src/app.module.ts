import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // loads .env
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/defaultdb'), // uses env variable with fallback
    UsersModule,
  ],
})
export class AppModule {}
