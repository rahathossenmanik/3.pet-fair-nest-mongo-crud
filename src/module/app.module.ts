require('dotenv').config({ path: '.env' });
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CharacterSchema } from 'src/schemas/character.schema';
import { PetTypeSchema } from 'src/schemas/petType.schema';
import { PetSchema } from 'src/schemas/pet.schema';
import { CharactersController } from 'src/controllers/character.controller';
import { PetTypesController } from 'src/controllers/petType.controller';
import { PetsController } from 'src/controllers/pet.controller';
import { CharacterService } from 'src/services/character.service';
import { PetTypeService } from 'src/services/petType.service';
import { PetService } from 'src/services/pet.service';

const mongo_uri = process.env.DATABASE_URL;

@Module({
  imports: [
    MongooseModule.forRoot(mongo_uri),
    MongooseModule.forFeature([
      { name: 'Character', schema: CharacterSchema },
      { name: 'PetType', schema: PetTypeSchema },
      { name: 'Pet', schema: PetSchema }
    ])
  ],
  controllers: [CharactersController, PetTypesController, PetsController],
  providers: [CharacterService, PetTypeService, PetService]
})
export class AppModule {}
