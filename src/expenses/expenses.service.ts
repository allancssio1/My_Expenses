import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { UserService } from 'src/user/user.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExpensesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createExpenseDto: CreateExpenseDto) {
    const userFound = this.prisma.users.findFirst({
      where: { id: createExpenseDto.userId },
    });

    if (!userFound) {
      return 'user not found';
    }

    const expense = await this.prisma.expenses.create({
      data: {
        ...createExpenseDto,
        created_at: createExpenseDto.created_at ?? new Date(),
      },
    });

    return expense;
  }

  findAll() {
    return 'array here';
  }

  findOne(id: number) {
    return `This action returns a #${id} expense`;
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return `This action updates a #${id} expense`;
  }

  remove(id: number) {
    return `This action removes a #${id} expense`;
  }
}
