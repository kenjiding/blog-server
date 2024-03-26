import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import { format } from 'date-fns';
console.log('process.env.FILE_UPLOAD_PATH: ', process.env.FILE_UPLOAD_PATH);

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: process.env.FILE_UPLOAD_PATH,
        filename: (req, file, callback) => {
          const fileExtName = extname(file.originalname);
          const filename = `${format(new Date(), 'yyyy-MM-dd')}-${uuidv4().substring(0, 10)}${fileExtName}`;
          callback(null, filename);
        },
        fileFilter: (req, file, callback) => {
          if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
            return callback(new Error('Only image files are allowed!'), false);
          }
          callback(null, true);
        },
        limits: {
          fileSize: 2 * 1024 * 1024,
        },
      }),
    }),
  ],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
