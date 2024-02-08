import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuhtEntity } from './entities/auth.entity';
import { LoginInput } from './dto/login.input';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuhtEntity)
  async login(@Args('loginInput') loginInput: LoginInput) {
     try {
      const loginRes = await this.authService.signIn(loginInput)
      return loginRes
     } catch (error) {
       throw new Error(error)
     }
  }
}
