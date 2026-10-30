import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateStaffDto {
    @IsString()
    @IsNotEmpty()
    fullName!: string

    @IsInt()
    @IsOptional()
    departmentId!: number
}
