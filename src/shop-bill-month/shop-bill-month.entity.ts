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
    tableName: 't_shop_bill_month',
})
export class ShopBillMonth extends Model<ShopBillMonth> {
    @PrimaryKey
    @Column({ field: 'accdate' })
    accdate: string;

    @Column({ field: 'rn' })
    rn: string;

    @Column({ field: 'l1' })
    l1: string;

    @Column({ field: 'fshopid' })
    fshopid: string;

    @PrimaryKey
    @Column({ field: 'shopid' })
    shopid: string;

    @Column({ field: 'shopname2' })
    shopname2: string;

    @Column({ field: 'shopname' })
    shopname: string;

    @Column({ field: 'transcnt' })
    transcnt: string;

    @Column({ field: 'drmant' })
    drmant: string;

    @Column({ field: 'cramt' })
    cramt: string;

}
