import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PetType, PetTypeDocument } from 'src/schemas/petType.schema';

@Injectable()
export class PetTypeService {
  constructor(
    @InjectModel(PetType.name)
    private petTypeModel: Model<PetTypeDocument>
  ) {}

  async findAll(): Promise<PetType[]> {
    return this.petTypeModel.find().exec();
  }

  async findById(id: string): Promise<PetType> {
    return this.petTypeModel.findById(id).exec();
  }

  async create(petType: PetType): Promise<PetType> {
    const createdPetType = new this.petTypeModel(petType);
    return createdPetType.save();
  }

  async update(id: string, petType: PetType): Promise<PetType> {
    await this.petTypeModel.findByIdAndUpdate(id, petType);
    return this.petTypeModel.findById(id).exec();
  }

  async delete(id: string): Promise<PetType> {
    const deletedPetType = await this.petTypeModel.findById(id).exec();
    await this.petTypeModel.findByIdAndRemove(id).exec();
    return deletedPetType;
  }
}
