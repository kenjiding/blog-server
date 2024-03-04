import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('article')
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({type: 'text'})
  text: string;

  @Column()
  detial: string;

  @CreateDateColumn({ name: 'create_time', type: 'timestamp'})
  createTime: Date;

  @UpdateDateColumn({ name: 'update_time', type: 'timestamp'})
  updateTime: Date;

  @Column()
  tags: string;

  @Column({ default: 0 })
  views: number;

  @Column()
  tips: string;

  @Column()
  image: string;
}
