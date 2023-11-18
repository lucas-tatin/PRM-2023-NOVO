import { Module } from "@nestjs/common";
import { TopicService } from "./topic.service";
import { TopicController } from "./topic.controller";
import { Topic } from "./topic.entity";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrm.forFeature([Topic]),
    UserModule],
    providers: [ TopicService ],
    controllers: [ TopicController ],
    exports: [ TopicService ]
})

export class UserModule {}