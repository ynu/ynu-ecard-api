import { ShopBillMonth } from './shop-bill-month.entity';

export const shopBillMonthProviders = [{ provide: 'ShopBillMonthRepository', useValue: ShopBillMonth }];
