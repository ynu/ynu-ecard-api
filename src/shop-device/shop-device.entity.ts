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
    tableName: 't_shopdevice',
})
export class ShopDevice extends Model<ShopDevice> {
    @PrimaryKey
    @Column({ field: 'id' })
    id: string;

    @Column({ field: 'areacode' })
    areacode: string;

    @Column({ field: 'level_jb' })
    level_jb: string;

    @Column({ field: 'fshopid' })
    fshopid: string;

    @Column({ field: 'shopid' })
    shopid: string;

    @Column({ field: 'accno' })
    accno: string;

    @Column({ field: 'shopfullname' })
    shopfullname: string;

    @Column({ field: 'shopname' })
    shopname: string;

    @Column({ field: 'shop_status' })
    shop_status: string;

    @Column({ field: 'shoptype' })
    shoptype: string;

    @Column({ field: 'accflag' })
    accflag: string;

    @Column({ field: 'deviceid' })
    deviceid: string;

    @Column({ field: 'deviceno' })
    deviceno: string;

    @Column({ field: 'devphyid' })
    devphyid: string;

    @Column({ field: 'devicename' })
    devicename: string;

    @Column({ field: 'devtypecode' })
    devtypecode: string;

    @Column({ field: 'device_status' })
    device_status: string;

}
