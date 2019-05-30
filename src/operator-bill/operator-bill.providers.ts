import { OperatorBill } from './operator-bill.entity';

export const operatorBillProviders = [{ provide: 'OperatorBillRepository', useValue: OperatorBill }];
