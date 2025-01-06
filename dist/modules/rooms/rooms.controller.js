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
exports.RoomsController = void 0;
const common_1 = require("@nestjs/common");
const rooms_service_1 = require("./rooms.service");
const room_dto_1 = require("./dto/room.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const platform_express_1 = require("@nestjs/platform-express");
const upload_image_room_1 = require("../../common/multer/upload-image-room");
let RoomsController = class RoomsController {
    constructor(roomsService) {
        this.roomsService = roomsService;
    }
    async getAllRooms(req) {
        return this.roomsService.getAllRooms(req);
    }
    async createRoom(body) {
        return this.roomsService.createRoom(body);
    }
    async getRoomByLocationId(id) {
        return this.roomsService.getRoomByLocationId(id);
    }
    searchPaginationRooms(query) {
        return this.roomsService.searchPaginationRooms(query);
    }
    async getRoomById(id) {
        return this.roomsService.getRoomById(id);
    }
    async updateRoom(id, body) {
        return this.roomsService.updateRoom(id, body);
    }
    async deleteRoom(id) {
        return this.roomsService.deleteRoom(id);
    }
    async uploadAvatarCloud(file, roomId) {
        return this.roomsService.uploadImageRoom(parseInt(roomId), file);
    }
};
exports.RoomsController = RoomsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", Promise)
], RoomsController.prototype, "getAllRooms", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiHeader)({
        name: 'accessToken',
        required: true,
        description: 'Access token for authentication'
    }),
    (0, swagger_1.ApiResponse)({ description: 'Success' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [room_dto_1.RoomDto]),
    __metadata("design:returntype", Promise)
], RoomsController.prototype, "createRoom", null);
__decorate([
    (0, common_1.Get)('location'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RoomsController.prototype, "getRoomByLocationId", null);
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
    __metadata("design:paramtypes", [room_dto_1.RoomFilterDto]),
    __metadata("design:returntype", void 0)
], RoomsController.prototype, "searchPaginationRooms", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RoomsController.prototype, "getRoomById", null);
__decorate([
    (0, swagger_1.ApiHeader)({
        name: 'accessToken',
        required: true,
        description: 'Access token for authentication'
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, room_dto_1.RoomDto]),
    __metadata("design:returntype", Promise)
], RoomsController.prototype, "updateRoom", null);
__decorate([
    (0, swagger_1.ApiHeader)({
        name: 'accessToken',
        required: true,
        description: 'Access token for authentication'
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RoomsController.prototype, "deleteRoom", null);
__decorate([
    (0, common_1.Post)('upload-image'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiHeader)({
        name: 'accessToken',
        required: true,
        description: 'Access token for authentication'
    }),
    (0, swagger_1.ApiHeader)({
        name: 'maPhong',
        required: true,
        description: 'Room ID'
    }),
    (0, swagger_1.ApiResponse)({ description: 'Success' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('imageRoom', { storage: upload_image_room_1.default })),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({ type: room_dto_1.UploadImageRoomDto }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Headers)('maPhong')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RoomsController.prototype, "uploadAvatarCloud", null);
exports.RoomsController = RoomsController = __decorate([
    (0, common_1.Controller)('api/rented-rooms'),
    __metadata("design:paramtypes", [rooms_service_1.RoomsService])
], RoomsController);
//# sourceMappingURL=rooms.controller.js.map