import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'models/user.entity'; // Ajuste o caminho conforme a localização correta do arquivo

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

    async findAllUsers(): Promise<User[]> {
    return this.userRepository.find();
    }

    async findUserById(id: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { id: Number(id) } });
    }

  
    async findUserByEmail(email: string): Promise<User | undefined> {
      return this.userRepository.findOne({ where: { email } });
    }


    async createUser(userData: any): Promise<User[]> {
        const user = this.userRepository.create(userData);
        await this.userRepository.save(user);
        return user;
    }

    async updateUser(id: string, updateUserDto: any): Promise<User> {
        // Encontrando o usuário com um objeto de opções adequado
        const user = await this.userRepository.findOne({
            where: { id: Number(id) }, // Convert the id to a number
            relations: ['profile'] // Inclua as relações conforme necessário
        });

        if (!user) {
            throw new Error('User not found');
        }

        // Atualizando o usuário com os novos dados
        this.userRepository.merge(user, updateUserDto);
        return this.userRepository.save(user); // Salva as alterações no banco de dados
    }

  async deleteUser(id: string): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new Error('User not found');
    }
  }
}
