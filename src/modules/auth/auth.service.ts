import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { Users } from '../user/user.entity';
import { SecretOrKey } from '@/configs/auth';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async signIn(user: Users): Promise<{ access_token: string }> {
    const userData = await this.userService.findOne(user);
    const payload = { sub: userData.id, username: userData.username };
    return {
      access_token: await this.jwtService.signAsync(payload, {
        secret: SecretOrKey,
      }),
    };
  }
}
