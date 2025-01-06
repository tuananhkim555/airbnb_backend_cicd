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
exports.LocationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let LocationService = class LocationService {
    constructor(prisma) {
        this.prisma = prisma;
        this.getAllLocations = async (req) => {
            let { pageIndex, pageSize } = req;
            pageIndex = +pageIndex > 0 ? +pageIndex : 1;
            pageSize = +pageSize > 0 ? +pageSize : 3;
            const skip = (pageIndex - 1) * pageSize;
            const totalItems = await this.prisma.location.count();
            const totalPages = Math.ceil(totalItems / pageSize);
            const locations = await this.prisma.location.findMany({
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
                items: locations || [],
            };
        };
        this.createLocation = async (locationDto) => {
            const { name_location, province, country, image } = locationDto;
            if (!name_location || !province || !country || !image) {
                return {
                    statusCode: 400,
                    message: 'Vui lòng điền đầy đủ thông tin địa điểm'
                };
            }
            return await this.prisma.location.create({
                data: {
                    name_location: locationDto.name_location,
                    province: locationDto.province,
                    country: locationDto.country,
                    image: locationDto.image,
                },
            });
        };
        this.searchLocations = async (query) => {
            const { pageIndex, pageSize, keyword } = query;
            const items_per_page = (pageSize);
            const page = (pageIndex);
            const search = keyword || '';
            const skip = page > 1 ? (page - 1) * items_per_page : 0;
            const users = await this.prisma.user.findMany({
                take: items_per_page,
                skip,
                where: {
                    OR: [
                        {
                            name: {
                                contains: search,
                            },
                        },
                        {
                            email: {
                                contains: search,
                            },
                        },
                    ],
                    AND: [
                        {
                            status: 1,
                        },
                    ],
                },
                orderBy: {
                    createdAt: 'desc',
                },
            });
            const total = await this.prisma.user.count({
                where: {
                    OR: [
                        {
                            name: {
                                contains: search,
                            },
                        },
                        {
                            email: {
                                contains: search,
                            },
                        },
                    ],
                    AND: [
                        {
                            status: 2,
                        },
                    ],
                },
            });
            return {
                data: users,
                total,
                currentPage: page,
                itemsPerPage: items_per_page,
            };
        };
        this.getLocationById = async (id) => {
            const location = await this.prisma.location.findUnique({
                where: { id },
            });
            if (!location) {
                return {
                    statusCode: 400,
                    message: 'Id không đúng kiểm tra lại'
                };
            }
            return await this.prisma.location.findUnique({
                where: { id },
            });
        };
        this.updateLocation = async (id, locationDto) => {
            const { name_location, province, country, image } = locationDto;
            if (!name_location || !province || !country || !image) {
                return {
                    statusCode: 400,
                    message: 'Vui lòng điền đầy đủ thông tin địa điểm'
                };
            }
            return await this.prisma.location.update({
                where: { id },
                data: { name_location, province, country, image },
            });
        };
        this.deleteLocation = async (id) => {
            const location = await this.prisma.location.findUnique({
                where: { id },
            });
            if (!location) {
                return {
                    statusCode: 400,
                    message: 'Id không đúng kiểm tra lại'
                };
            }
            return await this.prisma.location.delete({
                where: { id },
            });
        };
        this.uploadImageLocation = async (id, file) => {
            const location = await this.prisma.location.findUnique({
                where: { id },
            });
            if (!location) {
                return {
                    statusCode: 400,
                    message: ' Mã vị trí không tồn tại'
                };
            }
            return await this.prisma.location.update({
                where: { id },
                data: { image: file.filename },
            });
        };
    }
};
exports.LocationService = LocationService;
exports.LocationService = LocationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LocationService);
//# sourceMappingURL=location.service.js.map