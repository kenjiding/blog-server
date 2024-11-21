import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async findOne(user: Users): Promise<Users> {
    const data = await this.userRepository.findOne({
      where: {
        username: user.username,
        password: user.password,
      },
    });
    if (data) return data;
    else return Promise.reject(`username or password isn't correct`);
  }
}
