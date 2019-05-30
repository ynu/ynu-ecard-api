import { ApiModelProperty } from '@nestjs/swagger';
import { Device } from '../device.entity';

export class DeviceDto {

    @ApiModelProperty()
    readonly deviceid: string;

    @ApiModelProperty()
    readonly fdeviceid: string;

    @ApiModelProperty()
    readonly devicename: string;

    @ApiModelProperty()
    readonly devphyid: string;

    @ApiModelProperty()
    readonly deviceno: string;

    @ApiModelProperty()
    readonly devphytype: string;

    @ApiModelProperty()
    readonly devtypecode: string;

    @ApiModelProperty()
    readonly devverno: string;

    @ApiModelProperty()
    readonly status: string;

    constructor(device: Device) {
        this.deviceid = device.deviceid;
        this.fdeviceid = device.fdeviceid;
        this.devicename = device.devicename;
        this.devphyid = device.devphyid;
        this.deviceno = device.deviceno;
        this.devphytype = device.devphytype;
        this.devtypecode = device.devtypecode;
        this.devverno = device.devverno;
        this.status = device.status;
    }
}
