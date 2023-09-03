import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { now, HydratedDocument } from 'mongoose';

export type PetTypeDocument = HydratedDocument<PetType>;

@Schema({ timestamps: true })
export class PetType {
  @Prop({ required: true })
  label: string;

  @Prop({ default: now() })
  createDate: Date;

  @Prop({ default: now() })
  updateDate: Date;
}

export const PetTypeSchema = SchemaFactory.createForClass(PetType);
