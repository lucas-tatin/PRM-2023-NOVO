import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/users/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/users/user.entity";

@Module({
    imports: [ 
        TypeOrmModule.forFeature([ User ]),
        UserModule 
    ],
    providers: [ AuthService ], 
    controllers: [ AuthController ]
})
export class AuthModule {}