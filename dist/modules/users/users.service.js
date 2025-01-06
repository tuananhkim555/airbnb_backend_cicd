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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const jwt_1 = require("@nestjs/jwt");
let UsersService = class UsersService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.getAllUsers = async (req) => {
            let { pageIndex, pageSize } = req.query;
            pageIndex = +pageIndex > 0 ? +pageIndex : 1;
            pageSize = +pageSize > 0 ? +pageSize : 3;
            const skip = (pageIndex - 1) * pageSize;
            const totalItems = await this.prisma.user.count();
            const totalPages = Math.ceil(totalItems / pageSize);
            const users = await this.prisma.user.findMany({
                take: pageSize,
                skip: skip,
                orderBy: {
                    createdAt: 'desc',
                },
            });
            return {
                pageIndex: pageIndex,
                pageSize: pageSize,
                totalItems: totalItems,
                totalPages: totalPages,
                items: users || [],
            };
        };
        this.createUser = async (body) => {
            const user = await this.prisma.user.findUnique({
                where: {
                    email: body.email,
                },
            });
            if (user) {
                throw new common_1.HttpException({ message: 'Email này đã được sử dụng' }, common_1.HttpStatus.BAD_REQUEST);
            }
            const hashedPassword = await bcrypt.hash(body.password, 10);
            const result = await this.prisma.user.create({
                data: { ...body, password: hashedPassword, role: body.role, gender: body.gender },
            });
            return result;
        };
        this.deleteUsers = async (id) => {
            return this.prisma.user.delete({
                where: { id: id },
            });
        };
        this.getUserById = async (id) => {
            return this.prisma.user.findUnique({
                where: { id: +id },
            });
        };
        this.getPaginatedUsers = async (filters) => {
            const { pageIndex, pageSize, keyword } = filters;
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
        this.updateUser = async (id, updateUserDto) => {
            const user = await this.prisma.user.findUnique({
                where: {
                    email: updateUserDto.email,
                },
            });
            if (user) {
                throw new common_1.HttpException({ message: 'Email này đã được sử dụng' }, common_1.HttpStatus.BAD_REQUEST);
            }
            const hashedPassword = await bcrypt.hash(updateUserDto.password, 10);
            const result = await this.prisma.user.update({
                where: { id: +id },
                data: { ...updateUserDto, password: hashedPassword, role: updateUserDto.role, gender: updateUserDto.gender },
            });
            return result;
        };
        this.searchUsers = async (filters) => {
            const { name } = filters;
            const search = name || '';
            return this.prisma.user.findMany({
                where: { name: { contains: search } },
            });
        };
        this.uploadAvatar = async (file, userId) => {
            if (!file) {
                throw new common_1.BadRequestException('No file uploaded');
            }
            try {
                const avatarUrl = `uploads/avatars/${file.filename}`;
                const updatedUser = await this.prisma.user.update({
                    where: { id: userId },
                    data: {
                        avatar: avatarUrl,
                        updatedAt: new Date(),
                    },
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        avatar: true,
                    },
                });
                return {
                    message: 'Avatar uploaded successfully',
                    user: updatedUser,
                };
            }
            catch (error) {
                console.error('Upload avatar error:', error);
                throw new common_1.BadRequestException('Failed to update avatar');
            }
        };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], UsersService);
//# sourceMappingURL=users.service.js.map