import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { request } from 'http';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@Request() req){
    const { id } = req.user;
    if (id){
      return await this.usersService.profile(id);
    }
    return 'REQUEST ERROR: NOT VALID ID'
  }

  /*
  @Get(':id')
  async profile(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);
    if (user){
      return user;
    }
    return 'User nonexistent';
  }

  @Delete(':username')
  async delete(@Param('username') username: string){
    return await this.usersService.delete(username);
  }
  */
}
