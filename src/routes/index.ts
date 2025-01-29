import { Router } from "express";
import  upload from "../helper/ImageSaver";
import multer from "multer";
const router = Router();
router.get('/test', (req, res) => {
    res.send('Mensaje desde el BACK');
    },

router.post('/image', upload.single('file') ,(req, res) => {
    console.log(req.file);
    res.send('Imagen subida');
})
);
export default router;