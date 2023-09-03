import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PetType } from 'src/schemas/petType.schema';
import { PetTypeService } from 'src/services/petType.service';

@ApiTags('PetTypes')
@Controller('petTypes')
export class PetTypesController {
  constructor(private petTypesService: PetTypeService) {}

  @Get('getall')
  async findAll(): Promise<PetType[]> {
    return this.petTypesService.findAll();
  }

  @Get('getbyid/:id')
  async findById(@Param('id') id: string): Promise<PetType> {
    return this.petTypesService.findById(id);
  }

  @Post('create')
  async create(@Body() petType: PetType): Promise<PetType> {
    return this.petTypesService.create(petType);
  }

  @Put('update/:id')
  async update(@Param('id') id: string, @Body() petType: PetType): Promise<PetType> {
    return this.petTypesService.update(id, petType);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string): Promise<PetType> {
    return this.petTypesService.delete(id);
  }
}
