import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { UserLoginRequestDto } from './dto/user-login-request.dto';
import { UserLoginResponseDto } from './dto/user-login-response.dto';
import { sign } from 'jsonwebtoken';
import { ConfigService } from './../shared/config/config.service';

@Injectable()
export class AuthService {
    private readonly jwtPrivateKey: string;

    constructor(private readonly configService: ConfigService) {
        this.jwtPrivateKey = this.configService.jwtConfig.privateKey;
    }

    async login(userLoginRequestDto: UserLoginRequestDto): Promise<object> {
        const username = userLoginRequestDto.username;
        const password = userLoginRequestDto.password;
        if (username === process.env.USERNAME && password === process.env.PASSWORD) {
            const token = await this.signToken();
            return new UserLoginResponseDto(token);
        } else {
            return { message: 'wrong username or password' };
        }
    }

    async signToken(): Promise<string> {
        const payload = { username: process.env.USERNAME };
        const token = sign(payload, this.jwtPrivateKey, { noTimestamp: true });
        return token;
    }
}
