import { CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common"
import { Request } from "express";

@Injectable
export class AuthGuard implements CanActivate {

    constructor(
        private readonly jwtService: JwtService
    ){}

    async canActivate(context: ExecutionContext): Promise<boolean>{
            const request = context.switchToHttp().getRequest();
            const token = this.extractTokenFromHeader(request)

            //verifico se o token existe
            if (!token) {
                throw new UnauthorizedException('Token inexistente')
            }

            //verifico se o token é válido
            try {
                const payload = await this.jwtService.verifyAsync(token);

                console.log('Buuu:  ', payload)
            } catch  {
                throw new UnauthorizedException('Token Inválido')
            }

            return true;
        }

        extractTokenFromHeader(request: Request): string | undefined {
            const [type, token] = request.headers.authorization.split('') ?? [];

            return type === 'Bearer' ? token: undefined;
        }
    }

