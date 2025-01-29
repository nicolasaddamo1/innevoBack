import { Router } from "express";
import  upload, { saveImage } from "../helper/ImageSaver";
import multer  from "multer";

const router = Router();
router.get('/test', (req, res) => {
    res.send('Mensaje desde el BACK');
    },

router.post('/image', upload.single('file') ,(req, res) => {

    saveImage(req.file as Express.Multer.File);
    console.log(req.file);
    res.send('Imagen subida correctamente.');
})
);
export default router;