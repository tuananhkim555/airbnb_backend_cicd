"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const response_helper_1 = require("../helpers/response.helper");
let AllExceptionFilter = class AllExceptionFilter {
    catch(exception, host) {
        const response = host.switchToHttp().getResponse();
        let status = 500;
        let message = `Internal Server Error`;
        if (exception instanceof common_1.HttpException) {
            status = exception.getStatus();
            message = exception.message;
        }
        const result = (0, response_helper_1.responseError)(message, status, exception?.stack);
        response.status(status).json(result);
    }
};
exports.AllExceptionFilter = AllExceptionFilter;
exports.AllExceptionFilter = AllExceptionFilter = __decorate([
    (0, common_1.Catch)()
], AllExceptionFilter);
//# sourceMappingURL=all-exception.filter.js.map