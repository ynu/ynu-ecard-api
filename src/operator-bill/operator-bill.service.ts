import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { OperatorBill } from './operator-bill.entity';
import { OperatorBillDto } from './dto/operator-bill.dto';
import { OperatorBillQueryDto } from './dto/operator-bill-query.dto';

@Injectable()
export class OperatorBillService {
    constructor(
        @Inject('OperatorBillRepository')
        private readonly operatorBillRepository: typeof OperatorBill,
    ) { }

    async findByCondition(operatorBillQueryDto: OperatorBillQueryDto): Promise<OperatorBillDto[]> {
        const operatorBills = await this.operatorBillRepository.findAll<OperatorBill>({
            where: operatorBillQueryDto,
            raw: true,
        });
        return operatorBills;
    }

    async findAllIds(): Promise<string[]> {
        const operatorBills = await this.operatorBillRepository.findAll<OperatorBill>({
            attributes: ['primarykey'],
            raw: true,
        });
        return operatorBills.map(operatorBill => operatorBill.primarykey);
    }

    async findOne(id: string): Promise<OperatorBillDto> {
        const operatorBill = await this.operatorBillRepository.findByPk<OperatorBill>(id);
        if (!operatorBill) {
            throw new HttpException('No operatorBill found', HttpStatus.NOT_FOUND);
        }
        return new OperatorBillDto(operatorBill);
    }

    async summary(): Promise<object> {
        const count = await this.operatorBillRepository.count();
        return { count };
    }
}
