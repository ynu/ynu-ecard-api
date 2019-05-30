import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Shop } from './shop.entity';
import { ShopDto } from './dto/shop.dto';

@Injectable()
export class ShopService {
    constructor(
        @Inject('ShopRepository')
        private readonly shopRepository: typeof Shop,
    ) { }

    async findAll(): Promise<ShopDto[]> {
        const shops = await this.shopRepository.findAll<Shop>({
            raw: true,
        });
        return shops;
    }
    async findAllAncestors(shopid: string): Promise<ShopDto[]> {
        let currentShop = await this.shopRepository.findByPk<Shop>(shopid);
        if (!currentShop) {
            throw new HttpException('No shop found', HttpStatus.NOT_FOUND);
        }
        const ancestorShops = [currentShop];
        while (currentShop.fshopid !== '0') {
            currentShop = await this.shopRepository.findByPk<Shop>(currentShop.fshopid);
            ancestorShops.splice(0, 0, currentShop);
        }
        return ancestorShops;
    }

    async findAllIds(): Promise<string[]> {
        const shops = await this.shopRepository.findAll<Shop>({
            attributes: ['shopid'],
            raw: true,
        });
        return shops.map(shop => shop.shopid);
    }

    async findOne(id: string): Promise<ShopDto> {
        const shop = await this.shopRepository.findByPk<Shop>(id);
        if (!shop) {
            throw new HttpException('No shop found', HttpStatus.NOT_FOUND);
        }
        return new ShopDto(shop);
    }

    async summary(): Promise<object> {
        const count = await this.shopRepository.count();
        return { count };
    }
}
