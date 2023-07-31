import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { AuthRequest } from 'src/auth/models/AuthRequest';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from 'src/user/entities/user.entity';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post()
  create(
    @CurrentUser() user: User,
    @Body() createExpenseDto: CreateExpenseDto,
  ) {
    return this.expensesService.create({
      ...createExpenseDto,
      userId: user.id,
    });
  }

  @Get()
  findAll(@CurrentUser() user: User) {
    return this.expensesService.findAll();
  }

  @Get('find')
  findOne(@CurrentUser() user: User) {
    return this.expensesService.findOne(user.id);
  }
}
