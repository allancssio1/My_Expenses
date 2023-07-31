import {
  IsDateString,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';
import { Expense } from '../entities/expense.entity';

export class CreateExpenseDto extends Expense {
  @IsString()
  @MaxLength(191)
  describe: string;

  @IsNumber()
  @IsPositive()
  valor: number;

  @IsOptional()
  @IsDateString()
  created_at?: Date;
}
