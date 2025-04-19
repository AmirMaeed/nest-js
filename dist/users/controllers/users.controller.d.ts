import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<{
        users: import("../schemas/user.schema").User[];
    }>;
    createUserForm(): {};
    createUser(createUserDto: CreateUserDto): Promise<void>;
    getEditForm(id: string): Promise<{
        user: import("../schemas/user.schema").User;
    }>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<void>;
    deleteUser(id: string): Promise<void>;
}
