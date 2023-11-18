import { Module } from "@nestjs/common";
import { UserModule } from "src/users/user.module";
import { ProfileController } from "./profile.controller";

@Module({
    imports: [UserModule],
    controllers: [ ProfileController]
})
export class ProfileModule {}