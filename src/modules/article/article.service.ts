import { Injectable } from '@nestjs/common';
import { Article } from './article.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {

  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
  ) {}

  async counter(id: number): Promise<void> {
    const article = await this.articleRepository.findOne({
      where: { id }
    });
    if (article) {
      article.views += 1;
      await this.articleRepository.save(article);
    }
  }

  async create(article: Article): Promise<Article> {
    return await this.articleRepository.save(article);
  }

  async findById(id: number): Promise<Article> {
    return await this.articleRepository.findOne({
      where: { id }
    });
  }

  async findAll(): Promise<Article[]> {
    return await this.articleRepository.find();
  }
}
