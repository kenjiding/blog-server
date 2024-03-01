import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('article')
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  detial: string;

  @Column()
  tags: string;

  @Column()
  views: number;

  @Column()
  image: string;
}
