import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
  update(id: string, updateUserDto: UpdateUserDto) {
      throw new Error('Method not implemented.');
  }
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  // Create a new user
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  // Find all users
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // Find a single user by ID
  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    return user;
  }

  // Update an existing user
 
  async updateUser(id: string, data: UpdateUserDto): Promise<any> {
    return this.userModel.findByIdAndUpdate(id, data);
  }
  
  // Delete a user
  async deleteUser(id: string): Promise<any> {
    return this.userModel.findByIdAndDelete(id);
  }
  
}
