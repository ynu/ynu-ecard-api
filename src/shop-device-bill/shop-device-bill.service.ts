import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { ShopDeviceBill } from './shop-device-bill.entity';
import { ShopDeviceBillDto } from './dto/shop-device-bill.dto';
import { ShopDeviceBillQueryDto } from './dto/shop-device-bill-query.dto';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class ShopDeviceBillService {
    constructor(
        @Inject('ShopDeviceBillRepository')
        private readonly shopDeviceBillRepository: typeof ShopDeviceBill,
    ) { }

    async findByCondition(shopDeviceBillQueryDto: ShopDeviceBillQueryDto): Promise<ShopDeviceBill[]> {
        const shopDeviceBills = await this.shopDeviceBillRepository.findAll<ShopDeviceBill>({
            where: shopDeviceBillQueryDto,
            raw: true,
        });
        return shopDeviceBills;
    }

    async summary(): Promise<object> {
        const [summary] = await this.shopDeviceBillRepository.sequelize.query(
            `select
            count(*) as count, sum(transcnt) as totalTransCnt, sum(dramt) as totalDrAmt, sum(cramt) as totalCrAmt
            from t_shopdevice_bill`,
            { raw: true, plain: false, type: Sequelize.QueryTypes.SELECT });
        return summary;
    }
}
