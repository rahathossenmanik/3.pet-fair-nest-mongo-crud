import { Controller, Get, Req, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Request } from 'express';

class AuthorDto {
  name: string;
  age: number;
  breed: string;
}

@Controller('authors')
export class AuthorsController {
  @Post()
  create(@Body() createAuthorDto: AuthorDto) {
    return 'This action adds a new author';
  }

  @Get()
  findAll(@Query() query: any) {
    return `This action returns all authors (limit: ${query.limit} items)`;
  }

  @Get()
  findAllFiltered(@Req() request: Request): string {
    return 'This action returns all authors';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} author`;
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
