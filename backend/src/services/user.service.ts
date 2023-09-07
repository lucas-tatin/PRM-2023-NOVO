import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly repositorie: Repository<User>
    ) {}

    findAll(): Promise<User[]> {
        return this.repository.find();

    }

}