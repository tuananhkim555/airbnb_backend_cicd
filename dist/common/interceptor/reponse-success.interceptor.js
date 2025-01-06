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
exports.ResponseSuccessInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const response_helper_1 = require("../helpers/response.helper");
const core_1 = require("@nestjs/core");
const response_message_decorator_1 = require("../decorater/response-message.decorator");
let ResponseSuccessInterceptor = class ResponseSuccessInterceptor {
    constructor(reflector) {
        this.reflector = reflector;
    }
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((data) => {
            console.log({ data });
            const message = this.reflector.getAllAndOverride(response_message_decorator_1.RESPONSE_MESSAGE, [context.getHandler(), context.getClass()]);
            console.log({ message });
            const result = (0, response_helper_1.responseSuccess)(data, message);
            return result;
        }));
    }
};
exports.ResponseSuccessInterceptor = ResponseSuccessInterceptor;
exports.ResponseSuccessInterceptor = ResponseSuccessInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], ResponseSuccessInterceptor);
//# sourceMappingURL=reponse-success.interceptor.js.map