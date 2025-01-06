"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./modules/auth/auth.module");
const users_module_1 = require("./modules/users/users.module");
const comment_module_1 = require("./modules/comment/comment.module");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const passport_1 = require("@nestjs/passport");
const jwt_strategy_1 = require("./modules/auth/jwt.strategy");
const prisma_service_1 = require("./common/prisma/prisma.service");
const booking_module_1 = require("./modules/booking/booking.module");
const location_module_1 = require("./modules/location/location.module");
const rooms_module_1 = require("./modules/rooms/rooms.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            comment_module_1.CommentModule,
            users_module_1.UsersModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            passport_1.PassportModule.register({ defaultStrategy: `jwt` }),
            jwt_1.JwtModule.register({
                secret: process.env.ACCESS_TOKEN_SECRET,
                signOptions: { expiresIn: `60` }
            }),
            booking_module_1.BookingModule,
            rooms_module_1.RoomsModule,
            location_module_1.LocationModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_PIPE,
                useClass: common_1.ValidationPipe,
            },
            jwt_strategy_1.JwtStrategy,
            config_1.ConfigService,
            prisma_service_1.PrismaService
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map