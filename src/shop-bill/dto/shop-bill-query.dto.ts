import { ApiModelProperty } from '@nestjs/swagger';
import { ShopBill } from '../shop-bill.entity';
import { Length, IsString } from 'class-validator';

export class ShopBillQueryDto {

    @ApiModelProperty({ required: false })
    readonly accdate: string;

    @ApiModelProperty({ required: false })
    readonly fshopid: string;

    @ApiModelProperty({ required: false })
    readonly shopid: string;
}
