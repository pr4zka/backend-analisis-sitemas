import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { AuhtEntity } from './entities/auth.entity';
import { comparePassword } from '../encryption/encryption.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async signIn(data: AuhtEntity): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(data.username);
    if (!user) {
      throw new UnauthorizedException();
    }
    const isMatch = await comparePassword(data.password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
