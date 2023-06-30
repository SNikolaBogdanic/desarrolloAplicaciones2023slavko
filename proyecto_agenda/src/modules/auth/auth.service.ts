import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entities/user.entity';
import { UserLoginDto } from './dto/user-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async login(
    UserLoginDto: UserLoginDto
  ): Promise<
    'Nonexistent user' | 'Incorrect Password' | { token: string; user: User }
  > {
    const user = await this.userService.findOne(UserLoginDto.username);

    if (!user) return 'Nonexistent user';

    if (!user.validatePassword(UserLoginDto.password))
      return 'Incorrect Password';

    const payload = user.getInfoToToken();

    const token = this.jwtService.sign(payload);

    return {
      token: token,
      user: user,
    };
  }

  async validate(payload: any){
    const { username } = payload;

    const user = await this.userService.findOne(username);
    if (!user) throw new Error('Invalid User');
    return user;
}
}