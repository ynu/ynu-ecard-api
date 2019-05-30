import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { shopProviders } from './shop.providers';
import { AuthModule } from '../auth/auth.module';
import { JwtStrategy } from '../auth/jwt-strategy';

@Module({
    imports: [DatabaseModule, AuthModule],
    providers: [ShopService, ...shopProviders],
    controllers: [ShopController],
})
export class ShopModule { }
