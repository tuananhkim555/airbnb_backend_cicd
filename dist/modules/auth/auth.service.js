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
exports.AuthService = void 0;
const prisma_service_1 = require("../../common/prisma/prisma.service");
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(prisma, jwtService, configService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.configService = configService;
        this.register = async (userData) => {
            const user = await this.prisma.user.findUnique({
                where: {
                    email: userData.email,
                },
            });
            if (user) {
                throw new common_1.HttpException({ message: 'Email này đã được sử dụng.' }, common_1.HttpStatus.BAD_REQUEST);
            }
            if (!userData.password) {
                throw new common_1.HttpException({ message: 'Mật khẩu không được để trống.' }, common_1.HttpStatus.BAD_REQUEST);
            }
            if (!userData.role) {
                throw new common_1.HttpException({ message: 'Role is required.' }, common_1.HttpStatus.BAD_REQUEST);
            }
            const hashPassword = await (0, bcrypt_1.hash)(userData.password, 10);
            console.log('Hashed password:', hashPassword);
            const res = await this.prisma.user.create({
                data: {
                    ...userData,
                    password: hashPassword,
                    gender: userData.gender,
                    role: userData.role,
                },
            });
            const verifyHash = await (0, bcrypt_1.compare)(userData.password, res.password);
            console.log('Hash verification:', verifyHash);
            return res;
        };
        this.login = async (data) => {
            const user = await this.prisma.user.findUnique({
                where: {
                    email: data.email,
                },
            });
            if (!user) {
                throw new common_1.HttpException({ message: 'Tài khoản không tồn tại' }, common_1.HttpStatus.UNAUTHORIZED);
            }
            const verify = await (0, bcrypt_1.compare)(data.password, user.password);
            if (!verify) {
                throw new common_1.HttpException({ message: 'Mật khẩu không đúng.' }, common_1.HttpStatus.UNAUTHORIZED);
            }
            const payload = { id: user.id, name: user.name, email: user.email };
            const accessToken = await this.jwtService.signAsync(payload, {
                secret: process.env.ACCESS_TOKEN_SECRET,
                expiresIn: '1h',
            });
            const refreshToken = await this.jwtService.signAsync(payload, {
                secret: process.env.REFRESH_TOKEN_EXPIRES,
                expiresIn: '7d',
            });
            return { accessToken, refreshToken };
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map