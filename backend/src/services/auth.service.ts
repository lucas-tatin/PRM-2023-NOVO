import { Repository } from 'typeorm';
import { Injectable } from "@nestjs/common";
import { User } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ApplicationException } from 'src/exceptions';

@Injectable()

export class AuthService {


    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>
    ){}
        async validateCredential(username: string, password: string): Promise<User>{
            const found: User = await this.repository.findOneBy({username: username})
            
            if (!found) {
                throw new ApplicationException("Invalid user", 401)
            }

            if (found.password!==password){
                throw new ApplicationException("Invalid password", 401)
            }
            

            return found;
        }


}