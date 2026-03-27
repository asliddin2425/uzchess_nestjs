import {diskStorage} from 'multer';
import * as fs from 'node:fs';
import {BadRequestException} from '@nestjs/common';

function getFileType(mime: string): string {
  switch (mime) {
    case "image/jpeg":
    case "image/png":
    case "image/gif":
      return "image";
    case "application/pdf":
      return "document";
    default:
      return "file";
  }
}

export const storageOptions = diskStorage({
  destination: (req, file, cb) => {
    let subFolder: string = getFileType(file.mimetype);
    let destination: string = `./uploads/${subFolder}`;
    if (!fs.existsSync("./uploads")) {
      fs.mkdirSync("./uploads", {recursive: true});
    }
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination);
    }
    cb(null, destination);
  },
  filename: (req, file, cb) => {
    let extension = file.originalname.split(".").pop();
    if (!extension){
      return cb(new BadRequestException("File does not have extension"), "");
    }
    let prefix = getFileType(file.mimetype);
    let fileName = `${prefix}_${Date.now()}.${extension}`;
    return cb(null, fileName);
  }
});