import { Module } from '@nestjs/common';
import { AuthorsController } from 'src/controllers/authors.controller';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';

@Module({
  imports: [],
  controllers: [AppController, AuthorsController],
  providers: [AppService]
})
export class AppModule {}
