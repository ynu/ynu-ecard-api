import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { OperatorBillService } from './operator-bill.service';
import { OperatorBillController } from './operator-bill.controller';
import { operatorBillProviders } from './operator-bill.providers';

@Module({
    imports: [DatabaseModule],
    providers: [OperatorBillService, ...operatorBillProviders],
    controllers: [OperatorBillController],
})
export class OperatorBillModule { }
