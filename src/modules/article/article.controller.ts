import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './article.entity';
import { AuthGuard } from '@nestjs/passport';

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

  @UseGuards(AuthGuard('jwt'))
  @Post('/create')
  async create(@Body() articleData: Article) {
    return await this.articleService.created(articleData);
  }
}
