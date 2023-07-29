import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ExpensesModule } from './expenses/expenses.module';

@Module({
  imports: [PrismaModule, UserModule, ExpensesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
