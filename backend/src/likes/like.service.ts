import { InjectRepository } from "@nestjs/typeorm";
import { Topic } from "src/topics/topic.entity";
import { Entity, Repository } from "typeorm";

@Entity()
export class Like {

    constructor(
        @InjectRepository(Like)
        private readonly repository: Repository<Like>,
    ) {}

    findByTopic(topic: Topic): Promise<Like[]> {
        return this.repository.find({
            where: {
                topic: {
                    id: topic.id
                    }
                }
            });
        }
}
