import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto, UserFilterDto } from './dto/users.dto';
import { Request as ExpressRequest } from 'express';
interface RequestWithUser extends ExpressRequest {
    user?: any;
}
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getAllUsers(req: ExpressRequest): Promise<{
        pageIndex: any;
        pageSize: any;
        totalItems: number;
        totalPages: number;
        items: {
            id: number;
            name: string;
            email: string;
            password: string;
            phone: string | null;
            birthday: string | null;
            gender: import(".prisma/client").$Enums.Gender | null;
            role: import(".prisma/client").$Enums.Role | null;
            avatar: string | null;
            status: number;
            createdAt: Date;
            updatedAt: Date | null;
        }[];
    }>;
    createUser(createUserDto: CreateUserDto): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        phone: string | null;
        birthday: string | null;
        gender: import(".prisma/client").$Enums.Gender | null;
        role: import(".prisma/client").$Enums.Role | null;
        avatar: string | null;
        status: number;
        createdAt: Date;
        updatedAt: Date | null;
    }>;
    deleteUsers(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        phone: string | null;
        birthday: string | null;
        gender: import(".prisma/client").$Enums.Gender | null;
        role: import(".prisma/client").$Enums.Role | null;
        avatar: string | null;
        status: number;
        createdAt: Date;
        updatedAt: Date | null;
    }>;
    getPaginatedUsers(query: UserFilterDto): Promise<{
        data: {
            id: number;
            name: string;
            email: string;
            password: string;
            phone: string | null;
            birthday: string | null;
            gender: import(".prisma/client").$Enums.Gender | null;
            role: import(".prisma/client").$Enums.Role | null;
            avatar: string | null;
            status: number;
            createdAt: Date;
            updatedAt: Date | null;
        }[];
        total: number;
        currentPage: number;
        itemsPerPage: number;
    }>;
    getUserById(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        phone: string | null;
        birthday: string | null;
        gender: import(".prisma/client").$Enums.Gender | null;
        role: import(".prisma/client").$Enums.Role | null;
        avatar: string | null;
        status: number;
        createdAt: Date;
        updatedAt: Date | null;
    }>;
    updateUser(id: string, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        phone: string | null;
        birthday: string | null;
        gender: import(".prisma/client").$Enums.Gender | null;
        role: import(".prisma/client").$Enums.Role | null;
        avatar: string | null;
        status: number;
        createdAt: Date;
        updatedAt: Date | null;
    }>;
    searchUsers(name: string): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        phone: string | null;
        birthday: string | null;
        gender: import(".prisma/client").$Enums.Gender | null;
        role: import(".prisma/client").$Enums.Role | null;
        avatar: string | null;
        status: number;
        createdAt: Date;
        updatedAt: Date | null;
    }[]>;
    uploadAvatarLocal(file: Express.Multer.File, req: RequestWithUser): Promise<{
        message: string;
        user: {
            id: number;
            name: string;
            email: string;
            avatar: string;
        };
    }>;
    uploadAvatarCloud(file: Express.Multer.File, req: RequestWithUser): Promise<{
        message: string;
        user: {
            id: number;
            name: string;
            email: string;
            avatar: string;
        };
    }>;
}
export {};
