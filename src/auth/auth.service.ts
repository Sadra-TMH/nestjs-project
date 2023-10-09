import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService){}
    signin(){
        return {msg: 'sign in completed successfully'}
    }
    signup(){
        return {msg: 'sign up completed successfully'}
    }
}
