import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Comment } from "./comment.entity";

@Injectable()
export class CommentService {

    constructor(
        @InjectRepository(Comment)
        private readonly repository: Repository<Comment>,
    ) {}

    findByTopic(topic: Topic): Promise<Comment[]> {
        return this.repository.find({
            where: {
                topic: {
                    id: topic.id
                }
            }
        });
    }
    
    create(Comment: Comment): Promise<Comment> {
        return this.repository.save(Comment);
    }
    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }

    async update(id: number, Comment: Comment): Promise<Comment> {

        const found = await this.repository.findOneBy({id: id})

        if (!found) {
            throw new ApplicationException('Comment not found', 404)
        }

        //Garante que o objeto substituido terá o mesmo ID da requisição
        Comment.id = id;

        return this.repository.save(Comment);

    }
}