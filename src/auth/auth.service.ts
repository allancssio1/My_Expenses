import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login() {
    return 'login realizado';
  }

  validateUser(email: string, password: string) {
    throw new Error('Method not implemented.');
  }
}
