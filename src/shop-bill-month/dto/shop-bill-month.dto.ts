import { ApiModelProperty } from '@nestjs/swagger';
import { ShopBillMonth } from '../shop-bill-month.entity';

export class ShopBillMonthDto {
    @ApiModelProperty()
    readonly accdate: string;

    @ApiModelProperty()
    readonly rn: string;

    @ApiModelProperty()
    readonly l1: string;

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
    readonly drmant: string;

    @ApiModelProperty()
    readonly cramt: string;

    constructor(shopBillMonth: ShopBillMonth) {
        this.accdate = shopBillMonth.accdate;
        this.rn = shopBillMonth.rn;
        this.l1 = shopBillMonth.l1;
        this.fshopid = shopBillMonth.fshopid;
        this.shopid = shopBillMonth.shopid;
        this.shopname2 = shopBillMonth.shopname2;
        this.shopname = shopBillMonth.shopname;
        this.transcnt = shopBillMonth.transcnt;
        this.drmant = shopBillMonth.drmant;
        this.cramt = shopBillMonth.cramt;
    }
}
