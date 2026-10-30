import { IsString, IsNotEmpty, IsInt, IsOptional } from 'class-validator';

export class CreateDepartmentDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsInt()
  @IsOptional()
  companyId?: number;
}
