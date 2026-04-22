import { diskStorage } from 'multer';
import * as fs from 'node:fs';
import { BadRequestException } from '@nestjs/common';

function getFileType(mime: string): string {
  switch (mime) {
    case 'image/jpeg':
    case 'image/png':
    case 'image/gif':
      return 'image';
    case 'application/pdf':
      return 'document';
    default:
      return 'file';
  }
}

export const storageOptions = diskStorage({
  destination: (req, file, cb) => {
    const subFolder: string = getFileType(file.mimetype);
    const destination: string = `./uploads/${subFolder}`;
    if (!fs.existsSync('./uploads')) {
      fs.mkdirSync('./uploads', { recursive: true });
    }
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination);
    }
    cb(null, destination);
  },
  filename: (req, file, cb) => {
    const extension = file.originalname.split('.').pop();
    if (!extension) {
      return cb(new BadRequestException('File does not have extension'), '');
    }
    const prefix = getFileType(file.mimetype);
    const fileName = `${prefix}_${Date.now()}.${extension}`;
    return cb(null, fileName);
  },
});
