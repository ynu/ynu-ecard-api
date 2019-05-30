import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { ShopBillService } from './shop-bill.service';
import { ShopBillController } from './shop-bill.controller';
import { shopBillProviders } from './shop-bill.providers';

@Module({
    imports: [DatabaseModule],
    providers: [ShopBillService, ...shopBillProviders],
    controllers: [ShopBillController],
})
export class ShopBillModule { }
