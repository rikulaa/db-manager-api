import { IsString, IsInt } from 'class-validator';

export class Create {
  @IsString()
  readonly name: string;

  @IsString()
  readonly type: string;

  @IsString()
  readonly host: string;

  @IsInt()
  readonly port: number;
  
  @IsString()
  readonly user: string;

  @IsString()
  readonly password: string;
  
  @IsString()
  readonly database: string;
}