"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveImage = saveImage;
const multer_1 = __importDefault(require("multer"));
const node_fs_1 = __importDefault(require("node:fs"));
const upload = (0, multer_1.default)({ dest: 'uploads/' });
function saveImage(file) {
    const newPath = `./uploads/${file.originalname}`;
    node_fs_1.default.renameSync(file.path, newPath);
}
exports.default = upload;
