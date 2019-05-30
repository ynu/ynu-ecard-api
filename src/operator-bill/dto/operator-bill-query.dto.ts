import { ApiModelProperty } from '@nestjs/swagger';
import { OperatorBill } from '../operator-bill.entity';
import { Length, IsString } from 'class-validator';

export class OperatorBillQueryDto {

    @ApiModelProperty({ required: false })
    readonly accdate: string;

    @ApiModelProperty({ required: false })
    readonly opercode: string;
}
