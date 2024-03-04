import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './article.entity';

@Controller('article')
export class ArticleController {
  
  constructor(private readonly articleService: ArticleService) {}

  @Get('/get')
  async findAll(): Promise<Article[]> {
    return await this.articleService.findAll();
  }

  @Get('/counter/:id')
  async viewsCounter(@Param('id') id: number): Promise<void> {
    return await this.articleService.counter(id);
  }

  @Get('/get/:id')
  async findById(@Param('id') id: number): Promise<Article> {
    return await this.articleService.findById(id);
  }

  @Post('/create')
  async create(@Body() articleData: Article) {
    return await this.articleService.create(articleData);
  }
}
