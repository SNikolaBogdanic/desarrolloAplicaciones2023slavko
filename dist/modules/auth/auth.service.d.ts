import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    login(UserLoginDto: UserLoginDto): Promise<"Nonexistent user" | "Incorrect Password" | {
        token: string;
        user: import("../../entities/user.entity").User;
    }>;
}
