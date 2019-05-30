import { ShopDevice } from './shop-device.entity';

export const shopDeviceProviders = [{ provide: 'ShopDeviceRepository', useValue: ShopDevice }];
