import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { DeviceModule } from './device/device.module';
import { ShopModule } from './shop/shop.module';

import { CardModule } from './card/card.module';
import { OperatorBillModule } from './operator-bill/operator-bill.module';
import { ShopBillModule } from './shop-bill/shop-bill.module';
import { ShopBillMonthModule } from './shop-bill-month/shop-bill-month.module';
import { ShopDeviceModule } from './shop-device/shop-device.module';
import { ShopDeviceBillModule } from './shop-device-bill/shop-device-bill.module';
import { JwtStrategy } from './auth/jwt-strategy';

@Module({
    imports: [AuthModule, SharedModule, ShopModule, DeviceModule,
        CardModule, OperatorBillModule, ShopBillModule, ShopBillMonthModule, ShopDeviceModule, ShopDeviceBillModule],
    controllers: [],
    providers: [],
})
export class AppModule { }
