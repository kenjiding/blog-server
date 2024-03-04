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
