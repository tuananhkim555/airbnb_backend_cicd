import { HttpStatus } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
export declare class CommentService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    findAll: (req: Request) => Promise<{
        statusCode: number;
        pageIndex: any;
        pageSize: any;
        totalItems: number;
        totalPages: number;
        items: {
            id: number;
            createdAt: Date;
            updatedAt: Date | null;
            content: string;
            roomId: number;
            userId: number;
            rating: number;
        }[];
    }>;
    createComment: (createCommentDto: CreateCommentDto, req: Request) => Promise<{
        statusCode: HttpStatus;
        message: string;
        content: {
            id: number;
            createdAt: Date;
            updatedAt: Date | null;
            content: string;
            roomId: number;
            userId: number;
            rating: number;
        };
    }>;
    findByRoomId: (maPhong: number, req: Request) => Promise<{
        statusCode: number;
        pageIndex: any;
        pageSize: any;
        totalItems: number;
        totalPages: number;
        items: {
            id: number;
            createdAt: Date;
            updatedAt: Date | null;
            content: string;
            roomId: number;
            userId: number;
            rating: number;
        }[];
    }>;
    updateComment: (id: number, updateCommentDto: UpdateCommentDto) => Promise<{
        statusCode: HttpStatus;
        message: string;
        content: {
            id: number;
            createdAt: Date;
            updatedAt: Date | null;
            content: string;
            roomId: number;
            userId: number;
            rating: number;
        };
    }>;
    deleteComment: (id: number) => Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date | null;
        content: string;
        roomId: number;
        userId: number;
        rating: number;
    } | {
        statusCode: number;
        message: string;
    }>;
}
