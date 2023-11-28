import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Comment } from "./comment.entity";
import { CommentService } from "./comment.service";
import { CommentController } from "./comment.controller";
import { TopicModule } from "src/topics/topic.module";
import { User } from "src/users/user.entity";
import { Topic } from "src/topics/topic.entity";
import { UserModule } from "src/users/user.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([ Comment, Topic, User ]),
        TopicModule,
        UserModule
    ],
    providers: [ CommentService],
    controllers: [ CommentController ]
})
export class CommentModule{}