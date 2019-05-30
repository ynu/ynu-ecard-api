import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { ShopBill } from './shop-bill.entity';
import { ShopBillDto } from './dto/shop-bill.dto';

@Injectable()
export class ShopBillService {
    constructor(
        @Inject('ShopBillRepository')
        private readonly shopBillRepository: typeof ShopBill,
    ) { }

    async findByCondition(shopBillQueryDto: any): Promise<ShopBillDto[]> {
        const shopBills = await this.shopBillRepository.findAll<ShopBill>({
            where: shopBillQueryDto,
            raw: true,
        });
        return shopBills;
    }

    async findOne(id: string): Promise<ShopBillDto> {
        const shopBill = await this.shopBillRepository.findByPk<ShopBill>(id);
        if (!shopBill) {
            throw new HttpException('No shopBill found', HttpStatus.NOT_FOUND);
        }
        return new ShopBillDto(shopBill);
    }

    async summary(): Promise<object> {
        const count = await this.shopBillRepository.count();
        return { count };
    }
}
