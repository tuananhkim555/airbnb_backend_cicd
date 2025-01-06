"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseError = exports.responseSuccess = void 0;
const responseSuccess = (metaData = null, message = `Thành công`, code = 200) => {
    return {
        status: `success`,
        code: code,
        message: message,
        metaData: metaData,
        doc: `https://tuananhdev.click`,
    };
};
exports.responseSuccess = responseSuccess;
const responseError = (message = 'Internal Server Error', code = 500, stack = null) => {
    return {
        status: `error`,
        code: code,
        message: message,
        stack: stack,
    };
};
exports.responseError = responseError;
//# sourceMappingURL=response.helper.js.map