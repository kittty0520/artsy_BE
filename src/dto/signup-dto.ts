import { Expose, Transform, TransformFnParams } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import BaseDto from './base-dto';

export default class SignupDto extends BaseDto {
  // TODO
  @Expose()
  @IsNotEmpty()
  @IsString()
  //@Length(2, 30)
  @Transform(({ value }: TransformFnParams) => {
    if (typeof(value) === 'string') return value.trim();
  })
  displayName: string;

  @Expose()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  // TODO
  @Expose()
  @IsNotEmpty()
  @IsString()
  //@IsNotIn(values: any[])
  //@NotContains(seed: string)
  //@Matches(pattern: RegExp, modifiers?: string)
  //@Length(4, 30)
  password: string;
}
