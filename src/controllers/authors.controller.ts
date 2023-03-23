import { Controller, Get, Req, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Request } from 'express';
import { Author } from 'src/schemas/authors.schema';
import { AuthorService } from 'src/services/authors.service';

class AuthorDto {
  name: string;
  age: number;
  breed: string;
}

@Controller('authors')
export class AuthorsController {
  constructor(private authorsService: AuthorService) {}

  @Get()
  async findAll(): Promise<Author[]> {
    return this.authorsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.authorsService.findById(id);
  }

  @Post()
  create(@Body() author: Author) {
    return this.authorsService.create(author);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() author: Author) {
    return this.authorsService.update(id, author);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.authorsService.delete(id);
  }
}
