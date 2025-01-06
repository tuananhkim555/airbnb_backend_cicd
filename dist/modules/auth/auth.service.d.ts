import { PrismaService } from '../../common/prisma/prisma.service';
import { RegisterDto } from './dtos/auth.dto';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    prisma: PrismaService;
    private jwtService;
    configService: ConfigService;
    constructor(prisma: PrismaService, jwtService: JwtService, configService: ConfigService);
    register: (userData: RegisterDto) => Promise<User>;
    login: (data: {
        email: string;
        password: string;
    }) => Promise<any>;
}
