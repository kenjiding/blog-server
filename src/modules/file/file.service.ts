// upload.service.ts
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';

@Injectable()
export class FileService {
  async saveUploadedFile(file): Promise<any> {
    console.log('file: ', file);
    const imageUrl = `/files/${file.filename}`;
    return {
      message: 'File uploaded successfully',
      imageUrl: imageUrl,
    };
  }
}
