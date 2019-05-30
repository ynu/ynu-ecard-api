import { Shop } from './shop.entity';

export const shopProviders = [{ provide: 'ShopRepository', useValue: Shop }];
