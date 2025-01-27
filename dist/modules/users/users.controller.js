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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const users_service_1 = require("./users.service");
const users_dto_1 = require("./dto/users.dto");
const swagger_1 = require("@nestjs/swagger");
const upload_local_multer_1 = require("../../common/multer/upload-local.multer");
const upload_cloud_multer_1 = require("../../common/multer/upload-cloud.multer");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    getAllUsers(req) {
        return this.userService.getAllUsers(req);
    }
    createUser(createUserDto) {
        console.log('create user api =>', createUserDto);
        return this.userService.createUser(createUserDto);
    }
    deleteUsers(id) {
        return this.userService.deleteUsers(id);
    }
    getPaginatedUsers(query) {
        return this.userService.getPaginatedUsers(query);
    }
    getUserById(id) {
        return this.userService.getUserById(id);
    }
    updateUser(id, updateUserDto) {
        return this.userService.updateUser(id, updateUserDto);
    }
    searchUsers(name) {
        return this.userService.searchUsers({ name: name });
    }
    uploadAvatarLocal(file, req) {
        return this.userService.uploadAvatar(file, req.user.id);
    }
    async uploadAvatarCloud(file, req) {
        return this.userService.uploadAvatar(file, req.user.id);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, swagger_1.ApiResponse)({
        description: 'Success',
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAllUsers", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: users_dto_1.CreateUserDto,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Success',
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        description: 'Success',
    }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "deleteUsers", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        description: 'Success',
    }),
    (0, swagger_1.ApiQuery)({ name: 'pageIndex', description: 'Page number' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: 'Items per page' }),
    (0, swagger_1.ApiQuery)({ name: 'keyword', description: 'Search keyword' }),
    (0, common_1.Get)('search-pagination'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.UserFilterDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getPaginatedUsers", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        description: 'Success',
    }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUserById", null);
__decorate([
    (0, swagger_1.ApiBody)({
        type: users_dto_1.UpdateUserDto,
    }),
    (0, swagger_1.ApiResponse)({
        description: 'Success',
    }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, users_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, swagger_1.ApiResponse)({
        description: 'Success',
    }),
    (0, common_1.Get)('search/:name-user'),
    __param(0, (0, common_1.Param)('name-user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "searchUsers", null);
__decorate([
    (0, common_1.Post)('avatar-local'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiResponse)({ description: 'Success' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar', { storage: upload_local_multer_1.default })),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({ type: users_dto_1.UploadAvatarDto }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "uploadAvatarLocal", null);
__decorate([
    (0, common_1.Post)('avatar-cloud'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiHeader)({
        name: 'accessToken',
        required: true,
        description: 'Access token for authentication'
    }),
    (0, swagger_1.ApiResponse)({ description: 'Success' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar', { storage: upload_cloud_multer_1.default })),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({ type: users_dto_1.UploadAvatarDto }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "uploadAvatarCloud", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('/api/users'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map