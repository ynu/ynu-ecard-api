import { ApiModelProperty } from '@nestjs/swagger';
import { Card } from '../card.entity';

export class CardDto {
    @ApiModelProperty()
    readonly stuempno: string;

    @ApiModelProperty()
    readonly custname: string;

    @ApiModelProperty()
    readonly cardno: string;

    @ApiModelProperty()
    readonly cardstatus: string;

    @ApiModelProperty()
    readonly balance: string;

    @ApiModelProperty()
    readonly showcardno: string;

    @ApiModelProperty()
    readonly cardphyid: string;

    @ApiModelProperty()
    readonly expiredate: string;

    @ApiModelProperty()
    readonly opendate: string;

    @ApiModelProperty()
    readonly cardverno: string;

    @ApiModelProperty()
    readonly cardtype: string;

    @ApiModelProperty()
    readonly cardtypename: string;

    @ApiModelProperty()
    readonly custid: string;

    @ApiModelProperty()
    readonly feetype: string;

    @ApiModelProperty()
    readonly feename: string;

    @ApiModelProperty()
    readonly custtype: string;

    @ApiModelProperty()
    readonly custtypename: string;

    @ApiModelProperty()
    readonly deptcode: string;

    @ApiModelProperty()
    readonly deptname: string;

    @ApiModelProperty()
    readonly specialtycode: string;

    @ApiModelProperty()
    readonly specialtyname: string;

    @ApiModelProperty()
    readonly sex: string;

    @ApiModelProperty()
    readonly idtype: string;

    @ApiModelProperty()
    readonly idtypename: string;

    @ApiModelProperty()
    readonly idno: string;

    @ApiModelProperty()
    readonly areacode: string;

    @ApiModelProperty()
    readonly areaname: string;

    @ApiModelProperty()
    readonly classcode: string;

    @ApiModelProperty()
    readonly countrycode: string;

    @ApiModelProperty()
    readonly country: string;

    @ApiModelProperty()
    readonly email: string;

    @ApiModelProperty()
    readonly nationcode: string;

    @ApiModelProperty()
    readonly nation: string;

    @ApiModelProperty()
    readonly tel: string;

    @ApiModelProperty()
    readonly mobile: string;

    @ApiModelProperty()
    readonly zipcode: string;

    @ApiModelProperty()
    readonly cardupdtime: string;

    @ApiModelProperty()
    readonly custupdtime: string;

    constructor(card: Card) {
        this.stuempno = card.stuempno;
        this.custname = card.custname;
        this.cardno = card.cardno;
        this.cardstatus = card.cardstatus;
        this.balance = card.balance;
        this.showcardno = card.showcardno;
        this.cardphyid = card.cardphyid;
        this.expiredate = card.expiredate;
        this.opendate = card.opendate;
        this.cardverno = card.cardverno;
        this.cardtype = card.cardtype;
        this.cardtypename = card.cardtypename;
        this.custid = card.custid;
        this.feetype = card.feetype;
        this.feename = card.feename;
        this.custtype = card.custtype;
        this.custtypename = card.custtypename;
        this.deptcode = card.deptcode;
        this.deptname = card.deptname;
        this.specialtycode = card.specialtycode;
        this.specialtyname = card.specialtyname;
        this.sex = card.sex;
        this.idtype = card.idtype;
        this.idtypename = card.idtypename;
        this.idno = card.idno;
        this.areacode = card.areacode;
        this.areaname = card.areaname;
        this.classcode = card.classcode;
        this.countrycode = card.countrycode;
        this.country = card.country;
        this.email = card.email;
        this.nationcode = card.nationcode;
        this.nation = card.nation;
        this.tel = card.tel;
        this.mobile = card.mobile;
        this.zipcode = card.zipcode;
        this.cardupdtime = card.cardupdtime;
        this.custupdtime = card.custupdtime;
    }
}
