import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TopicModule } from "src/topics/topic.module";
import { User } from "src/users/user.entity";
import { Topic } from "src/topics/topic.entity";
import { UserModule } from "src/users/user.module";
import { Like } from "typeorm";
import { likesController } from "./like.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([ Like, Topic, User ]),
        TopicModule,
        UserModule
    ],
    controllers: [ likesController ]
})
export class LikeModule{}