import multer from "multer";
const upload = multer();

export const uploadFiles = upload.array("images");
