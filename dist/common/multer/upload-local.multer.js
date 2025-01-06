"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = require("multer");
const path = require("path");
const fs = require("fs");
fs.mkdirSync('images/', { recursive: true });
const storageLocal = (0, multer_1.diskStorage)({
    destination: function (req, file, cb) {
        cb(null, 'images');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const fileExtension = path.extname(file.originalname);
        const fileName = 'local' + '-' + uniqueSuffix + fileExtension;
        cb(null, fileName);
    },
});
exports.default = storageLocal;
//# sourceMappingURL=upload-local.multer.js.map