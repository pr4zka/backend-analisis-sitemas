import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(jwtService: JwtService) {}


async signIn(username: string, password: string){

}


}