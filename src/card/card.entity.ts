import {
    Table,
    PrimaryKey,
    AutoIncrement,
    Column,
    DataType,
    Model,
    ForeignKey,
    Unique,
    Length,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
    BelongsTo,
} from 'sequelize-typescript';

@Table({
    tableName: 't_custcardinfo',
})
export class Card extends Model<Card> {
    @PrimaryKey
    @Column({ field: 'stuempno' })
    stuempno: string;

    @Column({ field: 'custname' })
    custname: string;

    @Column({ field: 'cardno' })
    cardno: string;

    @Column({ field: 'cardstatus' })
    cardstatus: string;

    @Column({ field: 'balance' })
    balance: string;

    @Column({ field: 'showcardno' })
    showcardno: string;

    @Column({ field: 'cardphyid' })
    cardphyid: string;

    @Column({ field: 'expiredate' })
    expiredate: string;

    @Column({ field: 'opendate' })
    opendate: string;

    @Column({ field: 'cardverno' })
    cardverno: string;

    @Column({ field: 'cardtype' })
    cardtype: string;

    @Column({ field: 'cardtypename' })
    cardtypename: string;

    @Column({ field: 'custid' })
    custid: string;

    @Column({ field: 'feetype' })
    feetype: string;

    @Column({ field: 'feename' })
    feename: string;

    @Column({ field: 'custtype' })
    custtype: string;

    @Column({ field: 'custtypename' })
    custtypename: string;

    @Column({ field: 'deptcode' })
    deptcode: string;

    @Column({ field: 'deptname' })
    deptname: string;

    @Column({ field: 'specialtycode' })
    specialtycode: string;

    @Column({ field: 'specialtyname' })
    specialtyname: string;

    @Column({ field: 'sex' })
    sex: string;

    @Column({ field: 'idtype' })
    idtype: string;

    @Column({ field: 'idtypename' })
    idtypename: string;

    @Column({ field: 'idno' })
    idno: string;

    @Column({ field: 'areacode' })
    areacode: string;

    @Column({ field: 'areaname' })
    areaname: string;

    @Column({ field: 'classcode' })
    classcode: string;

    @Column({ field: 'countrycode' })
    countrycode: string;

    @Column({ field: 'country' })
    country: string;

    @Column({ field: 'email' })
    email: string;

    @Column({ field: 'nationcode' })
    nationcode: string;

    @Column({ field: 'nation' })
    nation: string;

    @Column({ field: 'tel' })
    tel: string;

    @Column({ field: 'mobile' })
    mobile: string;

    @Column({ field: 'zipcode' })
    zipcode: string;

    @Column({ field: 'cardupdtime' })
    cardupdtime: string;

    @Column({ field: 'custupdtime' })
    custupdtime: string;
}
