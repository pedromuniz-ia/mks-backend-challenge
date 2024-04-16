import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service'; // Supondo que você tenha um serviço de usuários para buscar dados do usuário
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findUserByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;  // Retorne o usuário sem a senha para segurança
    }
    return null;
  }
}
