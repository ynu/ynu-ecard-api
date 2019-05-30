import { ApiModelProperty } from '@nestjs/swagger';
import { Shop } from '../shop.entity';

export class ShopDto {
    @ApiModelProperty()
    readonly shopid: string;
    @ApiModelProperty()
    readonly fshopid: string;
    @ApiModelProperty()
    readonly shopname: string;
    @ApiModelProperty()
    readonly areacode: string;
    @ApiModelProperty()
    readonly shoptype: string;
    @ApiModelProperty()
    readonly accflag: string;
    @ApiModelProperty()
    readonly status: string;
    @ApiModelProperty()
    readonly accno: string;

    constructor(shop: Shop) {
        this.shopid = shop.shopid;
        this.fshopid = shop.fshopid;
        this.shopname = shop.shopname;
        this.areacode = shop.areacode;
        this.shoptype = shop.shoptype;
        this.accflag = shop.accflag;
        this.status = shop.status;
        this.accno = shop.accno;
    }
}
