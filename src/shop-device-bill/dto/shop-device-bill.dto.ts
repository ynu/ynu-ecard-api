import { ApiModelProperty } from '@nestjs/swagger';
import { ShopDeviceBill } from '../shop-device-bill.entity';

export class ShopDeviceBillDto {
    @ApiModelProperty()
    readonly accdate: string;

    @ApiModelProperty()
    readonly fshopid: string;

    @ApiModelProperty()
    readonly shopid: string;

    @ApiModelProperty()
    readonly accno: string;

    @ApiModelProperty()
    readonly shopname: string;

    @ApiModelProperty()
    readonly deviceid: string;

    @ApiModelProperty()
    readonly deviceno: string;

    @ApiModelProperty()
    readonly devphyid: string;

    @ApiModelProperty()
    readonly devicename: string;

    @ApiModelProperty()
    readonly transcnt: string;

    @ApiModelProperty()
    readonly dramt: string;

    @ApiModelProperty()
    readonly cramt: string;

    constructor(shopDeviceBill: ShopDeviceBill) {
        this.accdate = shopDeviceBill.accdate;
        this.fshopid = shopDeviceBill.fshopid;
        this.shopid = shopDeviceBill.shopid;
        this.accno = shopDeviceBill.accno;
        this.shopname = shopDeviceBill.shopname;
        this.deviceid = shopDeviceBill.deviceid;
        this.deviceno = shopDeviceBill.deviceno;
        this.devphyid = shopDeviceBill.devphyid;
        this.devicename = shopDeviceBill.devicename;
        this.transcnt = shopDeviceBill.transcnt;
        this.dramt = shopDeviceBill.dramt;
        this.cramt = shopDeviceBill.cramt;
    }
}
