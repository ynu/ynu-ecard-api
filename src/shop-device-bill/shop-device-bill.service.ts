import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { ShopDeviceBill } from './shop-device-bill.entity';
import { ShopDeviceBillDto } from './dto/shop-device-bill.dto';

@Injectable()
export class ShopDeviceBillService {
    constructor(
        @Inject('ShopDeviceBillRepository')
        private readonly shopDeviceBillRepository: typeof ShopDeviceBill,
    ) { }

    async summary(): Promise<object> {
        const count = await this.shopDeviceBillRepository.count();
        return { count };
    }
}
