import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Author, AuthorDocument } from 'src/schemas/authors.schema';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel(Author.name)
    private authorModel: Model<AuthorDocument>
  ) {}

  async findAll(): Promise<Author[]> {
    return this.authorModel.find().exec();
  }

  async findById(id: string): Promise<Author> {
    return this.authorModel.findById(id).exec();
  }
}
