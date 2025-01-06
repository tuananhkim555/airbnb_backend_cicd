"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
cloudinary_1.v2.config({
    cloud_name: 'ddaofgdke',
    api_key: '765745499357567',
    api_secret: 'JwGX3gxUMrKbPAH6Ts0-BJsrBpQ',
});
const storageLocation = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.v2,
    params: {
        folder: 'location-images',
    },
});
exports.default = storageLocation;
//# sourceMappingURL=upload-image-location.multer.js.map