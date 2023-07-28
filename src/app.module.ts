import { Module } from '@nestjs/common';
import { UserModule } from './module/user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ExpensesModule } from './module/expenses/expenses.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AppModule, UserModule, PrismaModule, ExpensesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
