import { Router } from "express";
import  upload, { saveImage } from "../helper/ImageSaver";

const router = Router();
router.get('/test', (req, res) => {
    res.send('Mensaje desde el BACK');
    },

router.post('/image', upload.single('file') ,(req, res) => {

    saveImage(req.file as Express.Multer.File);
    res.status(200).send('Imagen subida correctamente.');
})
);
export default router;