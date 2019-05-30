import { ShopDeviceBill } from './shop-device-bill.entity';

export const shopDeviceBillProviders = [{ provide: 'ShopDeviceBillRepository', useValue: ShopDeviceBill }];
