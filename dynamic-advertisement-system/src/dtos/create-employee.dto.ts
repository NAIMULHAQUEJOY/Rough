import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateEmployeeDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  userId: number;

  @IsNumber()
  @IsNotEmpty()
  sal: number;

  @IsNotEmpty()
  role: string;
}