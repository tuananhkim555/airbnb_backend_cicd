import { CreateUserDto, UpdateUserDto, UserFilterDto, UserNameSearchDto } from './dto/users.dto';
import { User } from '@prisma/client';
import { PrismaService } from '../../common/prisma/prisma.service';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
declare module 'express' {
    interface Request {
        user?: any;
    }
}
export declare class UsersService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    getAllUsers: (req: Request) => Promise<{
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
    createUser: (body: CreateUserDto) => Promise<User>;
    deleteUsers: (id: number) => Promise<{
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
    getUserById: (id: number) => Promise<{
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
    getPaginatedUsers: (filters: UserFilterDto) => Promise<{
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
    updateUser: (id: string, updateUserDto: UpdateUserDto) => Promise<{
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
    searchUsers: (filters: UserNameSearchDto) => Promise<{
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
    uploadAvatar: (file: Express.Multer.File, userId: number) => Promise<{
        message: string;
        user: {
            id: number;
            name: string;
            email: string;
            avatar: string;
        };
    }>;
}
