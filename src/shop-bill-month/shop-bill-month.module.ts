import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { ShopBillMonthService } from './shop-bill-month.service';
import { ShopBillMonthController } from './shop-bill-month.controller';
import { shopBillMonthProviders } from './shop-bill-month.providers';

@Module({
    imports: [DatabaseModule],
    providers: [ShopBillMonthService, ...shopBillMonthProviders],
    controllers: [ShopBillMonthController],
})
export class ShopBillMonthModule { }
