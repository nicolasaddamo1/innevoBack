import  multer  from "multer";
import fs from "node:fs";

const upload = multer({ dest: 'uploads/' });

function saveImage(file: Express.Multer.File) {

    const newPath = `./uploads/${file.originalname}`;
    fs.renameSync(file.path, newPath);

}

export default upload;
export { saveImage };