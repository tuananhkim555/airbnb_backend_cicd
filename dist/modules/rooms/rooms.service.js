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
exports.RoomsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let RoomsService = class RoomsService {
    constructor(prisma) {
        this.prisma = prisma;
        this.getAllRooms = async (req) => {
            const totalRooms = await this.prisma.room.findMany();
            if (!totalRooms) {
                return {
                    statusCode: 400,
                    message: 'Không tìm thấy phòng',
                };
            }
            let { pageIndex, pageSize } = req;
            pageIndex = +pageIndex > 0 ? +pageIndex : 1;
            pageSize = +pageSize > 0 ? +pageSize : 3;
            const skip = (pageIndex - 1) * pageSize;
            const totalItems = await this.prisma.room.count();
            const totalPages = Math.ceil(totalItems / pageSize);
            const rooms = await this.prisma.room.findMany({
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
                items: rooms || [],
            };
        };
        this.createRoom = async (body) => {
            const location = await this.prisma.location.findUnique({
                where: {
                    id: body.maViTri,
                },
            });
            if (!location) {
                return {
                    statusCode: 400,
                    message: 'Không tìm thấy mã vị trí',
                };
            }
            const room = await this.prisma.room.create({
                data: {
                    name: body.tenPhong,
                    guestCount: body.khach,
                    bedroom: body.phongNgu,
                    bed: body.giuong,
                    bathroom: body.phongTam,
                    description: body.moTa,
                    price: body.giaTien,
                    washer: body.mayGiat,
                    iron: body.banLa,
                    tv: body.tivi,
                    airCon: body.dieuHoa,
                    wifi: body.wifi,
                    kitchen: body.bep,
                    parking: body.doXe,
                    pool: body.hoBoi,
                    flatIron: body.banUi,
                    locationId: body.maViTri,
                    image: body.hinhAnh,
                },
            });
            return {
                statusCode: 200,
                message: 'Tạo phòng thành công',
                data: room,
            };
        };
        this.getRoomByLocationId = async (locationId) => {
            const room = await this.prisma.room.findMany({
                where: {
                    locationId: +locationId,
                },
            });
            if (!room || room.length === 0) {
                return {
                    statusCode: 400,
                    message: 'Không tìm thấy vị trí',
                };
            }
            const location = await this.prisma.location.findUnique({
                where: {
                    id: +locationId,
                },
            });
            if (!location) {
                return {
                    statusCode: 400,
                    message: 'Không tìm thấy vị trí',
                };
            }
            return {
                statusCode: 200,
                message: 'Vị trí đã được tìm thấy',
                data: room,
            };
        };
        this.getRoomById = async (id) => {
            const room = await this.prisma.room.findMany({
                where: {
                    id: +id,
                },
            });
            if (!room || room.length === 0) {
                return {
                    statusCode: 400,
                    message: 'Không tìm thấy phòng',
                };
            }
            return {
                statusCode: 200,
                message: 'Phòng đã được tìm thấy',
                data: room,
            };
        };
        this.searchPaginationRooms = async (query) => {
            const { pageIndex, pageSize, keyword } = query;
            const items_per_page = pageSize;
            const page = pageIndex;
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
        this.updateRoom = async (id, body) => {
            const existingRoom = await this.prisma.room.findUnique({
                where: { id: +id },
            });
            if (!existingRoom) {
                return {
                    statusCode: 400,
                    message: 'Không tìm thấy phòng',
                };
            }
            const location = await this.prisma.location.findUnique({
                where: {
                    id: body.maViTri,
                },
            });
            if (!location) {
                return {
                    statusCode: 400,
                    message: 'Không tìm thấy mã vị trí',
                };
            }
            const room = await this.prisma.room.update({
                where: { id: +id },
                data: {
                    name: body.tenPhong,
                    guestCount: body.khach,
                    bedroom: body.phongNgu,
                    bed: body.giuong,
                    bathroom: body.phongTam,
                    description: body.moTa,
                    price: body.giaTien,
                    washer: body.mayGiat,
                    iron: body.banLa,
                    tv: body.tivi,
                    airCon: body.dieuHoa,
                    wifi: body.wifi,
                    kitchen: body.bep,
                    parking: body.doXe,
                    pool: body.hoBoi,
                    flatIron: body.banUi,
                    locationId: body.maViTri,
                    image: body.hinhAnh,
                },
            });
            return {
                statusCode: 200,
                message: 'Phòng đã được cập nhật',
                data: room,
            };
        };
        this.deleteRoom = async (id) => {
            const existingRoom = await this.prisma.room.findUnique({
                where: { id: +id },
            });
            if (!existingRoom) {
                return {
                    statusCode: 400,
                    message: 'Không tìm thấy phòng',
                };
            }
            const room = await this.prisma.room.delete({
                where: { id: +id },
            });
            return {
                statusCode: 200,
                message: 'Phòng đã được xóa',
                data: room,
            };
        };
        this.uploadImageRoom = async (id, file) => {
            const room = await this.prisma.room.findUnique({
                where: { id },
            });
            if (!room) {
                return {
                    statusCode: 400,
                    message: ' ID không tồn tại',
                };
            }
            return await this.prisma.location.update({
                where: { id },
                data: { image: file.filename },
            });
        };
    }
};
exports.RoomsService = RoomsService;
exports.RoomsService = RoomsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RoomsService);
//# sourceMappingURL=rooms.service.js.map