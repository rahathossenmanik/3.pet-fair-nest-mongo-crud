import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';

async function bookstore() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}
bookstore();
