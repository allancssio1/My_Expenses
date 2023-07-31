import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const data = {
      ...createUserDto,
      password: await hash(createUserDto.password, 6),
    };

    const user = await this.prisma.users.create({
      data,
    });

    return {
      ...user,
      password: undefined,
    };
  }

  async findByEmail(email: string) {
    const user = await this.prisma.users.findUnique({ where: { email } });
    return user || null;
  }
}
