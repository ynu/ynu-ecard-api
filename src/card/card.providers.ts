import { Card } from './card.entity';

export const cardProviders = [{ provide: 'CardRepository', useValue: Card }];
