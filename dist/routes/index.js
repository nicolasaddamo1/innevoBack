"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ImageSaver_1 = __importDefault(require("../helper/ImageSaver"));
const router = (0, express_1.Router)();
router.get('/test', (req, res) => {
    res.send('Mensaje desde el BACK');
}, router.post('/image', ImageSaver_1.default.single('file'), (req, res) => {
    console.log(req.file);
    res.send('Imagen subida correctamente.');
}));
exports.default = router;
