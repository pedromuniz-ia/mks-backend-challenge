import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';


@Module({
  // Importa os módulos necessários para que as funcionalidades de autenticação
  // e gerenciamento de usuários sejam disponibilizadas para toda a aplicação.
  imports: [
    TypeOrmModule.forRoot(), // Módulo para integração com o banco de dados.
    CacheModule.register({
      store: redisStore,
      host: 'localhost', // Altere conforme a configuração do seu servidor Redis
      port: 6379,
      auth_pass: 'sua_senha', // Opcional: senha do seu Redis
      ttl: 600, // Tempo de vida do cache em segundos (10 minutos aqui)
    }), 
    UsersModule,
    MoviesModule,   // Módulo para gerenciamento de usuários.
    AuthModule     // Módulo para autenticação.
  ],
  // Controllers controlam as rotas de entrada para sua aplicação.
  // AppController é tipicamente um controlador principal para rotas básicas.
  controllers: [AppController],  
  // Providers são serviços, providers de dados, ou classes que o Nest injeta 
  // em controllers ou outros serviços (Injeção de Dependência).
  providers: [AppService],  // Serviço principal que pode conter lógicas de negócio.
})
export class AppModule {}
