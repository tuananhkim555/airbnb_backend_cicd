import { CommentService } from './comment.service';
import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';
import { PrismaService } from '../../common/prisma/prisma.service';
export declare class CommentController {
    private readonly commentService;
    private prisma;
    constructor(commentService: CommentService, prisma: PrismaService);
    findAll(req: Request): Promise<{
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
    create(createCommentDto: CreateCommentDto, req: Request): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
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
    findByRoomId(maPhong: number, req: Request): Promise<{
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
    getRooms(): Promise<{
        statusCode: number;
        content: {
            id: number;
            name: string;
        }[];
    }>;
    update(id: number, updateCommentDto: UpdateCommentDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
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
    delete(id: number): Promise<{
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
