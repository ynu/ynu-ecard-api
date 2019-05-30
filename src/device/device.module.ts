import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import { deviceProviders } from './device.providers';

@Module({
    imports: [DatabaseModule],
    providers: [DeviceService, ...deviceProviders],
    controllers: [DeviceController],
})
export class DeviceModule { }
