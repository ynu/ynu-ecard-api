import { ApiModelProperty } from '@nestjs/swagger';
import { ShopBill } from '../shop-bill.entity';

export class ShopBillDto {
    @ApiModelProperty()
    readonly level1: string;

    @ApiModelProperty()
    readonly accdate: string;

    @ApiModelProperty()
    readonly fshopid: string;

    @ApiModelProperty()
    readonly shopid: string;

    @ApiModelProperty()
    readonly shopname2: string;

    @ApiModelProperty()
    readonly shopname: string;

    @ApiModelProperty()
    readonly transcnt: string;

    @ApiModelProperty()
    readonly dramt: string;

    @ApiModelProperty()
    readonly cramt: string;

    constructor(shopBill: ShopBill) {
        this.level1 = shopBill.level1;
        this.accdate = shopBill.accdate;
        this.fshopid = shopBill.fshopid;
        this.shopid = shopBill.shopid;
        this.shopname2 = shopBill.shopname2;
        this.shopname = shopBill.shopname;
        this.transcnt = shopBill.transcnt;
        this.dramt = shopBill.dramt;
        this.cramt = shopBill.cramt;
    }
}
