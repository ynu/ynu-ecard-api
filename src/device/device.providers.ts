import { Device } from './device.entity';

export const deviceProviders = [{ provide: 'DeviceRepository', useValue: Device }];
