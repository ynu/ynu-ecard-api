import { ShopBill } from './shop-bill.entity';

export const shopBillProviders = [{ provide: 'ShopBillRepository', useValue: ShopBill }];
