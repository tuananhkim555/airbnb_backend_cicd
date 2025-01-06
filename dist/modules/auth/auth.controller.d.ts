import { User } from '@prisma/client';
import { LoginDto, RegisterDto } from './dtos/auth.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<User>;
    login(loginDto: LoginDto): Promise<any>;
}
