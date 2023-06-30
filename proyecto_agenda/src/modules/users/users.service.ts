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

  async findOne(username: string) {
    const user = await this.userRepository.findOne({
      where: {
        username: username
      }
    });
    if (user){
      return user;
    } else if (username == null || username == undefined){
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

  async profile(id: number){
    const user = await this.userRepository.findOne({
      where: {
        id: id
      }
    });
    if (user){
      const { username, password, email } = user;
      const lenP:number = password.length;
      let obfuscated_password:string = "";
      for (let i = 0; i<lenP;i++){
        obfuscated_password+= "*";
      }
      
      return { username, obfuscated_password, email };
    } else if (id == null || id == undefined){
      return null;
    }
    
    return null;
  }
}
