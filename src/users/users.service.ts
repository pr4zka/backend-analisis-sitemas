import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma.service';
import { User as UserEntity } from './entities/user.entity';
import { hashPassword } from '../encryption/encryption.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: UserEntity): Promise<UserEntity> {
    const pass = await hashPassword(data.password);
    const personRes = await this.prisma.person.create({
      data: {
        name: data.name,
        age: data.age,
        email: data.email,
        apellido: data.apellido,
      },
    });
    const userRes = await this.prisma.user.create({
      data: {
        username: data.username,
        password: pass,
        person: {
          connect: {
            id: personRes.id,
          },
        },
      },
    });
    return {
      ...userRes,
      ...personRes,
    };
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(username: string) {
    return await this.prisma.user.findUnique({
      where: {
        username: username,
      },
    });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
