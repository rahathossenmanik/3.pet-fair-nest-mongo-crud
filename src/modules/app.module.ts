require('dotenv').config({ path: '.env' });
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsController } from 'src/controllers/authors.controller';
import { AppController } from 'src/controllers/app.controller';
import { AppService } from 'src/services/app.service';
import { AuthorSchema } from 'src/schemas/authors.schema';
import { AuthorService } from 'src/services/authors.service';
import { BooksController } from 'src/controllers/books.controller';
import { BookService } from 'src/services/books.service';
import { BookSchema } from 'src/schemas/books.schema';

const mongo_uri = process.env.DATABASE_URL;

@Module({
  imports: [
    MongooseModule.forRoot(mongo_uri),
    MongooseModule.forFeature([
      { name: 'Author', schema: AuthorSchema },
      { name: 'Book', schema: BookSchema }
    ])
  ],
  controllers: [AppController, AuthorsController, BooksController],
  providers: [AppService, AuthorService, BookService]
})
export class AppModule {}
