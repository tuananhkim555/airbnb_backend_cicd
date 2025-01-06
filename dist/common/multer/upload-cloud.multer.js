"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
cloudinary_1.v2.config({
    cloud_name: 'ddaofgdke',
    api_key: '765745499357567',
    api_secret: 'JwGX3gxUMrKbPAH6Ts0-BJsrBpQ',
});
const storageCloud = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.v2,
    params: {
        folder: 'images',
    },
});
exports.default = storageCloud;
//# sourceMappingURL=upload-cloud.multer.js.map