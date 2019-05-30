import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.model';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ConfigService } from './../shared/config/config.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService, private readonly configService: ConfigService) {
        // console.info(`JwtStrategy.constructor invoked.`);
        super({
            jwtFromRequest: ExtractJwt.fromHeader('authorization'),
            secretOrKey: configService.jwtConfig.privateKey,
        });
    }

    async validate(payload: JwtPayload) {
        // console.info(`JwtStrategy.validate invoked.`);
        return { username: 'api' };
    }
}
