import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma.service';
import { User as UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

 async create(data: UserEntity): Promise<UserEntity> {
      const userRes = await this.prisma.user.create({
         data: {
            username: data.username,
            password: data.password,
         }
      });
      const personRes = await this.prisma.person.create({
        data: {
           name: data.name,
           email: data.email,
           age: data.age,
           userId: userRes.id
        }
      })
      return {
         ...userRes,
         ...personRes
      }
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
