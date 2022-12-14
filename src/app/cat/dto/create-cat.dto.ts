import { IsNotEmpty } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly sex: string;

  readonly desc: string;
}
