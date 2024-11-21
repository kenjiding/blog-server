import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Users } from '../user/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: Users) {
    return this.authService.signIn(user);
  }

  // @UseGuards(AuthGuard('jwt'))
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }
}
