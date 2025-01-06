import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../common/prisma/prisma.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private prisma;
    constructor(configService: ConfigService, prisma: PrismaService);
    validate(payload: any): Promise<{
        id: number;
        name: string;
        email: string;
        phone: string | null;
        birthday: string | null;
        gender: import(".prisma/client").$Enums.Gender | null;
        role: import(".prisma/client").$Enums.Role | null;
        avatar: string | null;
        status: number;
        createdAt: Date;
        updatedAt: Date | null;
    }>;
}
export {};
