import { ApiModelProperty } from '@nestjs/swagger';
import { OperatorBill } from '../operator-bill.entity';

export class OperatorBillDto {
    @ApiModelProperty()
    readonly primarykey: string;
    @ApiModelProperty()
    readonly accdate: string;
    @ApiModelProperty()
    readonly opercode: string;
    @ApiModelProperty()
    readonly opername: string;
    @ApiModelProperty()
    readonly subjno: string;
    @ApiModelProperty()
    readonly subjname: string;
    @ApiModelProperty()
    readonly transtype: string;
    @ApiModelProperty()
    readonly summary: string;
    @ApiModelProperty()
    readonly transcnt: string;
    @ApiModelProperty()
    readonly inamt: string;
    @ApiModelProperty()
    readonly outamt: string;

    constructor(operatorBill: OperatorBill) {
        this.primarykey = operatorBill.primarykey;
        this.accdate = operatorBill.accdate;
        this.opercode = operatorBill.opercode;
        this.opername = operatorBill.opername;
        this.subjno = operatorBill.subjno;
        this.subjname = operatorBill.subjname;
        this.transtype = operatorBill.transtype;
        this.summary = operatorBill.summary;
        this.transcnt = operatorBill.transcnt;
        this.inamt = operatorBill.inamt;
        this.outamt = operatorBill.outamt;
    }
}
