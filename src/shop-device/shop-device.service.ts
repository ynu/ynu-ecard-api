import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { ShopDevice } from './shop-device.entity';
import { ShopDeviceDto } from './dto/shop-device.dto';

@Injectable()
export class ShopDeviceService {
    constructor(
        @Inject('ShopDeviceRepository')
        private readonly shopDeviceRepository: typeof ShopDevice,
    ) { }

    async findAllIds(): Promise<string[]> {
        const shopDevices = await this.shopDeviceRepository.findAll<ShopDevice>({
            attributes: ['id'],
            raw: true,
        });
        return shopDevices.map(shopDevice => shopDevice.id);
    }

    async findOne(id: string): Promise<ShopDeviceDto> {
        const shopDevice = await this.shopDeviceRepository.findByPk<ShopDevice>(id);
        if (!shopDevice) {
            throw new HttpException('No shopDevice found', HttpStatus.NOT_FOUND);
        }
        return new ShopDeviceDto(shopDevice);
    }

    async summary(): Promise<object> {
        const count = await this.shopDeviceRepository.count();
        return { count };
    }
}
