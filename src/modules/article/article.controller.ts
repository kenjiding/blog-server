import { Body, Controller, Get, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './article.entity';

@Controller('article')
export class ArticleController {
  
  constructor(private readonly articleService: ArticleService) {}

  @Get('/get')
  async findAll(): Promise<Article[]> {
    return await this.articleService.findAll();
  }

  @Post('/create')
  async create(@Body() articleData: Article) {
    return await this.articleService.create(articleData);
  }
}
