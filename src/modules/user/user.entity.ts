import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  birthday: string;

  @CreateDateColumn({ name: 'create_time', type: 'timestamp'})
  createTime: Date;

  @UpdateDateColumn({ name: 'update_time', type: 'timestamp'})
  updateTime: Date;
}
