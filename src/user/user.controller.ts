import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
  @UseGuards(AuthGuard)
  @Get('me')
  getMe() {
    return 'user info';
  }
}
