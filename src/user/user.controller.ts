import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
import { GetUser } from 'src/auth/decorator';

@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
}
