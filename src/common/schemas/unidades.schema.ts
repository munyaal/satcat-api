import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema({timestamps: true})
export class Unidades extends Document {
  @Prop({ required: true, unique: true })
  claveUnidad: string;

  @Prop({ required: true})
  nombre: string;

  @Prop()
  descripcion: string;

  @Prop()
  nota: string;

  @Prop()
  simbolo: string;

  @Prop({ type:Date, required: true, default:Date.now })
  createAt: Date;

  @Prop({ type: Date, required: true, default:Date.now })
  updateAt: Date;

  @Prop({ type:Date, default: null })
  deleteAt: Date;
}

  export const UnidadesSchema = SchemaFactory.createForClass(Unidades);

  UnidadesSchema.pre('countDocuments', function () {
    if (!this.getFilter().hasOwnProperty('deleteAt')) {
      this.where({ deleteAt: null });
    }
  });

  UnidadesSchema.pre('find', function () {
    if (!this.getFilter().hasOwnProperty('deleteAt')) {
      this.where({ deleteAt: null });
    }
  });

  UnidadesSchema.pre('findOne', function () {
    if (!this.getFilter().hasOwnProperty('deleteAt')) {
      this.where({ deleteAt: null });
    }
  });

  export const UnidadesFeature: ModelDefinition = {
    name: Unidades.name,
    schema: UnidadesSchema,
  };

