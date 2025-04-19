import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
export declare class UsersService {
    private userModel;
    update(id: string, updateUserDto: UpdateUserDto): void;
    constructor(userModel: Model<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    updateUser(id: string, data: UpdateUserDto): Promise<any>;
    deleteUser(id: string): Promise<any>;
}
