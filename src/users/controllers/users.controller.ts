import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Render,
    Res,
    Redirect,
  } from '@nestjs/common';
  import { Response } from 'express';
  import { UsersService } from '../services/users.service';
  import { CreateUserDto } from '../dto/create-user.dto';
  import { UpdateUserDto } from '../dto/update-user.dto';
  
  @Controller('users')
  export class UsersController {
    constructor(private readonly usersService: UsersService) {}
  
    // Route to display all users
    @Get()
    @Render('users/index') // Renders the view for the users list
    async getUsers() {
      const users = await this.usersService.findAll();
      return { users };
    }
  
    // Route to display the form to create a new user
    @Get('create')
    @Render('users/create') // Renders the form view to create a new user
    createUserForm() {
      return {};
    }
  
    // Route to handle user creation (POST)
    @Post('create')
    @Redirect('/users') // Redirects to the users list after creation
    async createUser(@Body() createUserDto: CreateUserDto) {
      await this.usersService.create(createUserDto);
    }
  
    // Route to display the edit form for a specific user
    @Get('edit/:id')
    @Render('users/edit') // Renders the form to edit the user
    async getEditForm(@Param('id') id: string) {
      const user = await this.usersService.findOne(id);
      return { user };
    }
  
    // Route to handle user update (POST)
    @Post('edit/:id')
    @Redirect('/users') // Redirects to the users list after updating
    async updateUser(
      @Param('id') id: string,
      @Body() updateUserDto: UpdateUserDto,
    ) {
      await this.usersService.updateUser(id, updateUserDto);
    }
  
    // Route to handle user deletion (POST)
    @Post('delete/:id')
    @Redirect('/users') // Redirects to the users list after deletion
    async deleteUser(@Param('id') id: string) {
      await this.usersService.deleteUser(id);
    }
  }
  