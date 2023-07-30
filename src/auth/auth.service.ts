import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async login() {
    return 'login realizado';
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (!user || typeof user === 'undefined' || user === null) {
      throw new Error('Email or password is incorrect.');
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error('Email or password is incorrect.');
    }

    return {
      ...user,
      password: undefined,
    };
  }
}
