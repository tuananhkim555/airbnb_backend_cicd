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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentController = void 0;
const common_1 = require("@nestjs/common");
const comment_service_1 = require("./comment.service");
const comment_dto_1 = require("./dto/comment.dto");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const public_decorator_1 = require("../../common/decorater/public.decorator");
let CommentController = class CommentController {
    constructor(commentService, prisma) {
        this.commentService = commentService;
        this.prisma = prisma;
    }
    findAll(req) {
        return this.commentService.findAll(req);
    }
    create(createCommentDto, req) {
        return this.commentService.createComment(createCommentDto, req);
    }
    findByRoomId(maPhong, req) {
        return this.commentService.findByRoomId(maPhong, req);
    }
    async getRooms() {
        const rooms = await this.prisma.room.findMany({
            select: {
                id: true,
                name: true,
            }
        });
        return {
            statusCode: 200,
            content: rooms
        };
    }
    update(id, updateCommentDto) {
        return this.commentService.updateComment(id, updateCommentDto);
    }
    delete(id) {
        return this.commentService.deleteComment(id);
    }
};
exports.CommentController = CommentController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], CommentController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)(''),
    (0, swagger_1.ApiHeader)({
        name: 'accessToken',
        required: true,
        description: 'Access token for authentication'
    }),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new comment' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Comment created successfully' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comment_dto_1.CreateCommentDto, Request]),
    __metadata("design:returntype", void 0)
], CommentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('room/:maPhong'),
    __param(0, (0, common_1.Param)('maPhong', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Request]),
    __metadata("design:returntype", void 0)
], CommentController.prototype, "findByRoomId", null);
__decorate([
    (0, common_1.Get)('rooms'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommentController.prototype, "getRooms", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, comment_dto_1.UpdateCommentDto]),
    __metadata("design:returntype", void 0)
], CommentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CommentController.prototype, "delete", null);
exports.CommentController = CommentController = __decorate([
    (0, swagger_1.ApiTags)('Comment'),
    (0, common_1.Controller)('/api/comment'),
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    __metadata("design:paramtypes", [comment_service_1.CommentService,
        prisma_service_1.PrismaService])
], CommentController);
//# sourceMappingURL=comment.controller.js.map