import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { ShopDeviceBillService } from './shop-device-bill.service';
import { ShopDeviceBillController } from './shop-device-bill.controller';
import { shopDeviceBillProviders } from './shop-device-bill.providers';

@Module({
    imports: [DatabaseModule],
    providers: [ShopDeviceBillService, ...shopDeviceBillProviders],
    controllers: [ShopDeviceBillController],
})
export class ShopDeviceBillModule { }
