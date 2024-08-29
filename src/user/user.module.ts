import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User])  // Importa o repositório da entidade User
  ],
  providers: [UserService],          // Registra o UserService
  controllers: [UserController],     // Registra o UserController
  exports: [UserService]             // Exporta o UserService se for necessário em outros módulos
})
export class UserModule {}
