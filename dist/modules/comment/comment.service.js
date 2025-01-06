"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const jwt_1 = require("@nestjs/jwt");
let CommentService = class CommentService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.findAll = async (req) => {
            let { pageIndex, pageSize } = req.query;
            pageIndex = +pageIndex > 0 ? +pageIndex : 1;
            pageSize = +pageSize > 0 ? +pageSize : 3;
            const skip = (pageIndex - 1) * pageSize;
            const totalItems = await this.prisma.user.count();
            const totalPages = Math.ceil(totalItems / pageSize);
            const comments = await this.prisma.comment.findMany({
                take: pageSize,
                skip: skip,
                orderBy: {
                    createdAt: 'desc',
                },
            });
            return {
                statusCode: 200,
                pageIndex: pageIndex,
                pageSize: pageSize,
                totalItems: totalItems,
                totalPages: totalPages,
                items: comments || [],
            };
        };
        this.createComment = async (createCommentDto, req) => {
            const userExists = await this.prisma.user.findUnique({
                where: { id: createCommentDto.maNguoiBinhLuan }
            });
            const roomExists = await this.prisma.room.findUnique({
                where: { id: createCommentDto.maPhong }
            });
            if (!roomExists) {
                throw new common_1.HttpException({ statusCode: 404, message: 'Room không tồn tại' }, common_1.HttpStatus.NOT_FOUND);
            }
            if (!userExists) {
                throw new common_1.HttpException({ statusCode: 404, message: 'User không tồn tại' }, common_1.HttpStatus.NOT_FOUND);
            }
            const newComment = await this.prisma.comment.create({
                data: {
                    userId: createCommentDto.maNguoiBinhLuan,
                    roomId: createCommentDto.maPhong,
                    content: createCommentDto.noiDung,
                    rating: createCommentDto.saoBinhLuan,
                    createdAt: new Date(),
                },
            });
            return {
                statusCode: common_1.HttpStatus.CREATED,
                message: 'Comment created successfully',
                content: newComment,
            };
        };
        this.findByRoomId = async (maPhong, req) => {
            let { pageIndex, pageSize } = req.query;
            pageIndex = +pageIndex > 0 ? +pageIndex : 1;
            pageSize = +pageSize > 0 ? +pageSize : 3;
            const skip = (pageIndex - 1) * pageSize;
            const totalItems = await this.prisma.comment.count({
                where: { roomId: maPhong },
            });
            const totalPages = Math.ceil(totalItems / pageSize);
            const comments = await this.prisma.comment.findMany({
                take: pageSize,
                skip: skip,
                orderBy: {
                    createdAt: 'desc',
                },
            });
            return {
                statusCode: 200,
                pageIndex: pageIndex,
                pageSize: pageSize,
                totalItems: totalItems,
                totalPages: totalPages,
                items: comments || [],
            };
        };
        this.updateComment = async (id, updateCommentDto) => {
            const existingComment = await this.prisma.comment.findUnique({
                where: { id }
            });
            if (!existingComment) {
                throw new common_1.HttpException({ statusCode: 404, message: 'Comment not found' }, common_1.HttpStatus.NOT_FOUND);
            }
            const comment = await this.prisma.comment.update({
                where: {
                    id: id
                },
                data: {
                    roomId: updateCommentDto.maPhong,
                    userId: updateCommentDto.maNguoiBinhLuan,
                    content: updateCommentDto.noiDung,
                    rating: updateCommentDto.saoBinhLuan,
                    updatedAt: new Date()
                }
            });
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'Comment updated successfully',
                content: comment
            };
        };
        this.deleteComment = async (id) => {
            const comment = await this.prisma.comment.findUnique({
                where: { id }
            });
            if (!comment) {
                return {
                    statusCode: 404,
                    message: 'Comment not found'
                };
            }
            return this.prisma.comment.delete({
                where: { id }
            });
        };
    }
};
exports.CommentService = CommentService;
exports.CommentService = CommentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, jwt_1.JwtService])
], CommentService);
//# sourceMappingURL=comment.service.js.map