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
    tableName: 't_shop_bill',
})
export class ShopBill extends Model<ShopBill> {

    @Column({ field: 'level1' })
    level1: string;

    @PrimaryKey
    @Column({ field: 'accdate' })
    accdate: string;

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

    @Column({ field: 'dramt' })
    dramt: string;

    @Column({ field: 'cramt' })
    cramt: string;

}
