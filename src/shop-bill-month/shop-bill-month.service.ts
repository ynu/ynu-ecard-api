import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { ShopBillMonth } from './shop-bill-month.entity';
import { ShopBillMonthDto } from './dto/shop-bill-month.dto';
import { ShopBillMonthQueryDto } from './dto/shop-bill-month-query.dto';

@Injectable()
export class ShopBillMonthService {
    constructor(
        @Inject('ShopBillMonthRepository')
        private readonly shopBillMonthRepository: typeof ShopBillMonth,
    ) { }

    async findByCondition(shopBillMonthQueryDto: ShopBillMonthQueryDto): Promise<ShopBillMonthDto[]> {
        const shopBillMonths = await this.shopBillMonthRepository.findAll<ShopBillMonth>({
            where: shopBillMonthQueryDto,
            raw: true,
        });
        return shopBillMonths;
    }

    async summary(): Promise<object> {
        const count = await this.shopBillMonthRepository.count();
        return { count };
    }
}
