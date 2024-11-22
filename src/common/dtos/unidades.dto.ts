import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UnidadesDto {
  @IsString()
  @IsNotEmpty({ message: 'El campo Clave Unidad no puede estar vacío.' })
  claveUnidad: string;

  @IsString()
  @IsNotEmpty({ message: 'El campo Nombre no puede estar vacío' })
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion: string;

  @IsString()
  @IsOptional()
  nota: string;

  @IsString()
  @IsOptional()
  simbolo: string;
}
