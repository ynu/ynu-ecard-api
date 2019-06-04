import { ApiModelProperty } from '@nestjs/swagger';
import { ShopDeviceBill } from '../shop-device-bill.entity';
import { Length, IsString } from 'class-validator';

export class ShopDeviceBillQueryDto {

    @ApiModelProperty({ required: false })
    readonly accdate: string;

    @ApiModelProperty({ required: false })
    readonly fshopid: string;

    @ApiModelProperty({ required: false })
    readonly shopid: string;
}
