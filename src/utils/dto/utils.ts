
import { IsString, IsNotEmpty } from 'class-validator';
export class Utils {
  @IsString()
  @IsNotEmpty()
  number: number;
}
