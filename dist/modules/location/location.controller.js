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
exports.LocationController = void 0;
const common_1 = require("@nestjs/common");
const location_service_1 = require("./location.service");
const location_dto_1 = require("./dto/location.dto");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const upload_image_location_multer_1 = require("../../common/multer/upload-image-location.multer");
let LocationController = class LocationController {
    constructor(locationService) {
        this.locationService = locationService;
    }
    getAllLocations(req) {
        return this.locationService.getAllLocations(req);
    }
    createLocation(locationDto) {
        return this.locationService.createLocation(locationDto);
    }
    searchLocations(query) {
        return this.locationService.searchLocations(query);
    }
    getLocationById(id) {
        return this.locationService.getLocationById(id);
    }
    updateLocation(id, locationDto) {
        return this.locationService.updateLocation(id, locationDto);
    }
    deleteLocation(id) {
        return this.locationService.deleteLocation(id);
    }
    async uploadAvatarCloud(file, maViTri, req) {
        return this.locationService.uploadImageLocation(parseInt(maViTri), file);
    }
};
exports.LocationController = LocationController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "getAllLocations", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [location_dto_1.LocationDto]),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "createLocation", null);
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
    __metadata("design:paramtypes", [location_dto_1.LocationFilterDto]),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "searchLocations", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "getLocationById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, location_dto_1.LocationDto]),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "updateLocation", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LocationController.prototype, "deleteLocation", null);
__decorate([
    (0, common_1.Post)('upload-image'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiHeader)({
        name: 'accessToken',
        required: true,
        description: 'Access token for authentication'
    }),
    (0, swagger_1.ApiHeader)({
        name: 'maViTri',
        required: true,
        description: 'Mã vị trí cần upload ảnh'
    }),
    (0, swagger_1.ApiResponse)({ description: 'Success' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('imageLocation', { storage: upload_image_location_multer_1.default })),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({ type: location_dto_1.UploadImageLocationDto }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Headers)('maViTri')),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "uploadAvatarCloud", null);
exports.LocationController = LocationController = __decorate([
    (0, common_1.Controller)('api/location'),
    __metadata("design:paramtypes", [location_service_1.LocationService])
], LocationController);
//# sourceMappingURL=location.controller.js.map