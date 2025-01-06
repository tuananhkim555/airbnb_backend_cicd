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
exports.BookingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let BookingService = class BookingService {
    constructor(prisma) {
        this.prisma = prisma;
        this.findAll = async (req) => {
            let { pageIndex, pageSize } = req;
            pageIndex = +pageIndex > 0 ? +pageIndex : 1;
            pageSize = +pageSize > 0 ? +pageSize : 3;
            const skip = (pageIndex - 1) * pageSize;
            const totalItems = await this.prisma.user.count();
            const totalPages = Math.ceil(totalItems / pageSize);
            const bookings = await this.prisma.booking.findMany({
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
                items: bookings || [],
            };
        };
        this.createBooking = async (createBookingDto) => {
            const userExists = await this.prisma.user.findUnique({
                where: {
                    id: createBookingDto.maNguoiDung,
                },
            });
            if (!userExists) {
                throw new common_1.NotFoundException('User not found');
            }
            const roomExists = await this.prisma.room.findUnique({
                where: {
                    id: createBookingDto.maPhong,
                },
            });
            if (!roomExists) {
                throw new common_1.NotFoundException('Room not found');
            }
            const bookingExists = await this.prisma.booking.findFirst({
                where: {
                    roomId: createBookingDto.maPhong,
                    checkIn: createBookingDto.ngayDen,
                    checkOut: createBookingDto.ngayDi,
                },
            });
            if (bookingExists) {
                throw new common_1.BadRequestException('Phòng đã được đặt');
            }
            return this.prisma.booking.create({
                data: {
                    roomId: createBookingDto.maPhong,
                    checkIn: createBookingDto.ngayDen,
                    checkOut: createBookingDto.ngayDi,
                    userId: createBookingDto.maNguoiDung,
                    guestCount: createBookingDto.soLuongKhach,
                },
            });
        };
        this.findById = async (id) => {
            const booking = await this.prisma.booking.findUnique({
                where: { id },
            });
            if (!booking) {
                throw new common_1.NotFoundException('Booking không có thông tin đặt phòng');
            }
            return booking;
        };
        this.updateBooking = async (id, updateBookingDto) => {
            const bookingExists = await this.prisma.booking.findUnique({
                where: { id },
            });
            if (!bookingExists) {
                throw new common_1.NotFoundException('Booking không có thông tin đặt phòng');
            }
            return this.prisma.booking.update({
                where: { id },
                data: {
                    roomId: updateBookingDto.maPhong,
                    checkIn: updateBookingDto.ngayDen,
                    checkOut: updateBookingDto.ngayDi,
                    userId: updateBookingDto.maNguoiDung,
                    guestCount: updateBookingDto.soLuongKhach,
                },
            });
        };
        this.deleteBooking = async (id) => {
            const bookingExists = await this.prisma.booking.findUnique({
                where: {
                    id,
                },
            });
            if (!bookingExists) {
                throw new common_1.NotFoundException('Booking không có thông tin đặt phòng');
            }
            return this.prisma.booking.delete({
                where: { id },
            });
        };
        this.findByUserId = async (id) => {
            const userExists = await this.prisma.user.findUnique({
                where: {
                    id,
                },
            });
            if (!userExists) {
                throw new common_1.NotFoundException('User not found');
            }
            return this.prisma.booking.findMany({
                where: { userId: id },
            });
        };
    }
};
exports.BookingService = BookingService;
exports.BookingService = BookingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookingService);
//# sourceMappingURL=booking.service.js.map