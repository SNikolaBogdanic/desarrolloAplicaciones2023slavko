import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ) {}

    async login(UserLoginDto: UserLoginDto): Promise<"Nonexistent user" | "Incorrect Password" | { token: string; user: import("c:/Users/slavk/OneDrive/Escritorio/microserv/proyecto_agenda/src/entities/user.entity").User; }>{
        const user = await this.userService.findOne(UserLoginDto.username);

        if (!user) return 'Nonexistent user';

        if (!user.validatePassword(UserLoginDto.password)) return 'Incorrect Password';

        const payload = user.getInfoToToken();

        const token = this.jwtService.sign(payload);

        return {
            token: token,
            user: user
        }
    }

}
