import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    delete(username: string): Promise<"User deleted successfully" | "User not found">;
}
