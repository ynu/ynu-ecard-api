import { ApiModelProperty } from '@nestjs/swagger';
import { ShopDevice } from '../shop-device.entity';

export class ShopDeviceDto {
    @ApiModelProperty()
    readonly id: string;

    @ApiModelProperty()
    readonly areacode: string;

    @ApiModelProperty()
    readonly level_jb: string;

    @ApiModelProperty()
    readonly fshopid: string;

    @ApiModelProperty()
    readonly shopid: string;

    @ApiModelProperty()
    readonly accno: string;

    @ApiModelProperty()
    readonly shopfullname: string;

    @ApiModelProperty()
    readonly shopname: string;

    @ApiModelProperty()
    readonly shop_status: string;

    @ApiModelProperty()
    readonly shoptype: string;

    @ApiModelProperty()
    readonly accflag: string;

    @ApiModelProperty()
    readonly deviceid: string;

    @ApiModelProperty()
    readonly deviceno: string;

    @ApiModelProperty()
    readonly devphyid: string;

    @ApiModelProperty()
    readonly devicename: string;

    @ApiModelProperty()
    readonly devtypecode: string;

    @ApiModelProperty()
    readonly device_status: string;


    constructor(shopDevice: ShopDevice) {
        this.id = shopDevice.id;
        this.areacode = shopDevice.areacode;
        this.level_jb = shopDevice.level_jb;
        this.fshopid = shopDevice.fshopid;
        this.shopid = shopDevice.shopid;
        this.accno = shopDevice.accno;
        this.shopfullname = shopDevice.shopfullname;
        this.shopname = shopDevice.shopname;
        this.shop_status = shopDevice.shop_status;
        this.shoptype = shopDevice.shoptype;
        this.accflag = shopDevice.accflag;
        this.deviceid = shopDevice.deviceid;
        this.deviceno = shopDevice.deviceno;
        this.devphyid = shopDevice.devphyid;
        this.devicename = shopDevice.devicename;
        this.devtypecode = shopDevice.devtypecode;
        this.device_status = shopDevice.device_status;
    }
}
