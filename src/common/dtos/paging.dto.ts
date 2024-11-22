import { IsNumber, IsPositive, Max, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class PagingDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Max(50)
  @Type(() => Number)
  limit?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  page?: number;
}
