import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Device } from './device.entity';
import { DeviceDto } from './dto/device.dto';

@Injectable()
export class DeviceService {
    constructor(
        @Inject('DeviceRepository')
        private readonly deviceRepository: typeof Device,
    ) { }

    async findAllIds(): Promise<string[]> {
        const devices = await this.deviceRepository.findAll<Device>({
            attributes: ['deviceid'],
            raw: true,
        });
        return devices.map(device => device.deviceid);
    }

    async findOne(id: string): Promise<DeviceDto> {
        const device = await this.deviceRepository.findByPk<Device>(id);
        if (!device) {
            throw new HttpException('No device found', HttpStatus.NOT_FOUND);
        }
        return new DeviceDto(device);
    }

    async summary(): Promise<object> {
        const count = await this.deviceRepository.count();
        return { count };
    }
}
