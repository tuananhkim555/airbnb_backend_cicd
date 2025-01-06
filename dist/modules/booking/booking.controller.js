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
exports.BookingController = void 0;
const common_1 = require("@nestjs/common");
const booking_service_1 = require("./booking.service");
const booking_dto_1 = require("./dto/booking.dto");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let BookingController = class BookingController {
    constructor(bookingService, prisma) {
        this.bookingService = bookingService;
        this.prisma = prisma;
    }
    findAll(req) {
        return this.bookingService.findAll(req);
    }
    createBooking(createBookingDto) {
        return this.bookingService.createBooking(createBookingDto);
    }
    findById(id) {
        return this.bookingService.findById(id);
    }
    updateBooking(id, updateBookingDto) {
        return this.bookingService.updateBooking(id, updateBookingDto);
    }
    deleteBooking(id) {
        return this.bookingService.deleteBooking(id);
    }
    findByUserId(id) {
        return this.bookingService.findByUserId(id);
    }
};
exports.BookingController = BookingController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Request]),
    __metadata("design:returntype", void 0)
], BookingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [booking_dto_1.CreateBookingDto]),
    __metadata("design:returntype", void 0)
], BookingController.prototype, "createBooking", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BookingController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, booking_dto_1.UpdateBookingDto]),
    __metadata("design:returntype", void 0)
], BookingController.prototype, "updateBooking", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BookingController.prototype, "deleteBooking", null);
__decorate([
    (0, common_1.Get)('user/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BookingController.prototype, "findByUserId", null);
exports.BookingController = BookingController = __decorate([
    (0, common_1.Controller)('/api/booking'),
    __metadata("design:paramtypes", [booking_service_1.BookingService, prisma_service_1.PrismaService])
], BookingController);
//# sourceMappingURL=booking.controller.js.map