import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { DatabaseModule } from './../database/database.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt-strategy';

@Module({
    imports: [PassportModule.register({ defaultStrategy: 'jwt' }), DatabaseModule],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService, JwtStrategy],
})
export class AuthModule { }
