import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity'
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

constructor(
  @InjectRepository(User) private userRepository: Repository<User>
  ){ }

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne({
      where: {
        username: id
      }
    });
    if (user){
      return user;
    } else if (id == null || id == undefined){
      return null;
    }
    return null;
  }

  async delete(username: string){
    const user = await this.userRepository.findOne({
      where: {
        username: username
      }
    });
    if (user){
      this.userRepository.delete(user.id);
      return 'User deleted successfully';
    }
    return 'User not found'
  }
}
