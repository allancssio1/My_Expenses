import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
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

  findAll() {
    return `This action returns all user`;
  }

  async findByEmail(email: string) {
    return await this.prisma.users.findUnique({ where: { email } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
