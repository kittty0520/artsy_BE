import { Expose, Transform, TransformFnParams } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, Length, validateOrReject } from 'class-validator';

import BaseDto from './base-dto';
import { BadRequestError, ERROR_NAMES } from '@/error/errors';

export class SignUpDto extends BaseDto {
  @Expose()
  @IsNotEmpty()
  @IsString()
  @Length(2, 30)
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
  @Length(4, 30)
  password: string;

  async validate(): Promise<void> {
    try {
      await validateOrReject(this, { forbidUnknownValues: true });
    } catch (error) {
      throw new BadRequestError(ERROR_NAMES.INVALID_PARAM, error);
    }
  }
}

export class CheckDuplicatedEmailDto extends BaseDto {
  @Expose()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  async validate(): Promise<void> {
    try {
      await validateOrReject(this, { forbidUnknownValues: true });
    } catch (error) {
      throw new BadRequestError(ERROR_NAMES.INVALID_PARAM, error);
    }
  }
}

export class LoginDto extends BaseDto {
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
  @Length(4, 30)
  password: string;

  async validate(): Promise<void> {
    try {
      await validateOrReject(this, { forbidUnknownValues: true });
    } catch (error) {
      throw new BadRequestError(ERROR_NAMES.INVALID_PARAM, error);
    }
  }
}