// upload.controller.ts
import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from './file.service';

@Controller('file')
export class FileController {
  constructor(private fileService: FileService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file')) // 'file' 是表单数据中文件字段的名称
  async uploadedFile(@UploadedFile() file) {
    // 调用服务层方法来处理文件保存
    return this.fileService.saveUploadedFile(file);
  }
}
