import { ApiModelProperty } from '@nestjs/swagger';
import { ShopBillMonth } from '../shop-bill-month.entity';
import { Length, IsString } from 'class-validator';

export class ShopBillMonthQueryDto {

    @ApiModelProperty({ required: false })
    readonly accdate: string;

    @ApiModelProperty({ required: false })
    readonly fshopid: string;

    @ApiModelProperty({ required: false })
    readonly shopid: string;
}
