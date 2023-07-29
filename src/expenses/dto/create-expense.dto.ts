import {
  IsDate,
  IsDateString,
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
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

  @IsString()
  @IsUUID()
  userId: string;

  @IsOptional()
  @IsDateString()
  created_at?: Date;
}
