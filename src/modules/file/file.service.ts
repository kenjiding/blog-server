// upload.service.ts
import { Injectable } from '@nestjs/common';

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
