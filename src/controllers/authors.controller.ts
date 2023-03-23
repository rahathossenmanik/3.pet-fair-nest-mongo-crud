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

  @Post()
  create(@Body() createAuthorDto: AuthorDto) {
    return 'This action adds a new author';
  }

  @Get()
  async findAll(): Promise<Author[]> {
    return this.authorsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.authorsService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAuthorDto: AuthorDto) {
    return `This action updates a #${id} author`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} author`;
  }
}
