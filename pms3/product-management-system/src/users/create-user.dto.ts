import { IsNotEmpty, IsString, IsEmail, IsEnum } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username?: string;  // Marked as optional to satisfy TypeScript

  @IsNotEmpty()
  @IsString()
  password?: string;  // Marked as optional to satisfy TypeScript

  @IsNotEmpty()
  @IsEmail()
  email?: string;     // Marked as optional to satisfy TypeScript

  @IsEnum(['admin', 'customer'])
  role?: string;      // Marked as optional to satisfy TypeScript
}
