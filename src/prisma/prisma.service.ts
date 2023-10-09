import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://node:node@localhost:5432/nest?schema=public',
          // url: process.env.DATABASE_URL
        },
      },
    });
  }
}
