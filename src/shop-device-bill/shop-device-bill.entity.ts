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
    tableName: 't_shopdevice_bill',
})
export class ShopDeviceBill extends Model<ShopDeviceBill> {
    @PrimaryKey
    @Column({ field: 'accdate' })
    accdate: string;

    @Column({ field: 'fshopid' })
    fshopid: string;

    @PrimaryKey
    @Column({ field: 'shopid' })
    shopid: string;

    @Column({ field: 'accno' })
    accno: string;

    @Column({ field: 'shopname' })
    shopname: string;

    @PrimaryKey
    @Column({ field: 'deviceid' })
    deviceid: string;

    @Column({ field: 'deviceno' })
    deviceno: string;

    @Column({ field: 'devphyid' })
    devphyid: string;

    @Column({ field: 'devicename' })
    devicename: string;

    @Column({ field: 'transcnt' })
    transcnt: string;

    @Column({ field: 'dramt' })
    dramt: string;

    @Column({ field: 'cramt' })
    cramt: string;

}
