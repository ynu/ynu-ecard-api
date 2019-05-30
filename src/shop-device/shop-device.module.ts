import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { ShopDeviceService } from './shop-device.service';
import { ShopDeviceController } from './shop-device.controller';
import { shopDeviceProviders } from './shop-device.providers';

@Module({
    imports: [DatabaseModule],
    providers: [ShopDeviceService, ...shopDeviceProviders],
    controllers: [ShopDeviceController],
})
export class ShopDeviceModule { }
