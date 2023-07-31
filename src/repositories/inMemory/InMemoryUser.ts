import { hash } from 'bcrypt';
import { randomUUID } from 'crypto';
import { User } from 'src/user/entities/user.entity';

export class InMemoryUser {
  users: User[] = [];

  async create(createUserDto: User): Promise<User> {
    const userAlreadyExists = this.findByEmail(createUserDto.email);

    if (userAlreadyExists) {
      throw new Error('User Already Exists');
    }

    const user: User = {
      ...createUserDto,
      password: await hash(createUserDto.password, 6),
      created_at: createUserDto.created_at ?? new Date(),
      id: randomUUID(),
    };

    this.users.push({
      ...user,
    });

    return { ...user, password: undefined };
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.users.find((user) => user.email === email);
    return user || null;
  }
}
