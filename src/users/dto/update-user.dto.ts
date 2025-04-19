import { IsString, IsEmail, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()  // Optional because we may not update all fields at once
  @IsString()
  name?: string;  // Make it optional, so we don't have to update the name every time

  @IsOptional()
  @IsEmail()
  email?: string;  // Optional email field
}
