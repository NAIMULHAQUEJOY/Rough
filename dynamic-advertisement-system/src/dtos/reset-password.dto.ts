import { IsNotEmpty, MinLength } from 'class-validator';

export class ResetPasswordDto {
  @IsNotEmpty()
  recoveryCode: number;

  @IsNotEmpty()
  @MinLength(8)
  newPassword: string;
}