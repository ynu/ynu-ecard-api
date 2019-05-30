import { Sequelize } from 'sequelize-typescript';
import { Device } from './../device/device.entity';
import { Shop } from './../shop/shop.entity';
import { Card } from './../card/card.entity';
import { OperatorBill } from './../operator-bill/operator-bill.entity';
import { ShopBill } from './../shop-bill/shop-bill.entity';
import { ShopBillMonth } from './../shop-bill-month/shop-bill-month.entity';
import { ShopDevice } from './../shop-device/shop-device.entity';
import { ShopDeviceBill } from './../shop-device-bill/shop-device-bill.entity';
import { ConfigService } from './../shared/config/config.service';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async (configService: ConfigService) => {
            const sequelize = new Sequelize(configService.sequelizeOrmConfig);
            sequelize.addModels([Shop, Device, Card, OperatorBill, ShopBill, ShopBillMonth, ShopDevice, ShopDeviceBill]);
            await sequelize.sync();
            return sequelize;
        },
        inject: [ConfigService],
    },
];
