import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Topic } from './topics/topic.entity';
import {JwtModule } from '@nestjs/module'
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'prm_2023', 
      synchronize: true,
      autoLoadEntities: true
    }),
    UserModule,
    TopicModule,
    AuthModule,
    ProfileModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}