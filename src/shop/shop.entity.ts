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
    tableName: 't_shop',
})
export class Shop extends Model<Shop> {
    @PrimaryKey
    @Column({ field: 'shopid' })
    shopid: string;

    @Column({ field: 'fshopid' })
    fshopid: string;

    @Column({ field: 'shopname' })
    shopname: string;

    @Column({ field: 'areacode' })
    areacode: string;

    @Column({ field: 'shoptype' })
    shoptype: string;

    @Column({ field: 'accflag' })
    accflag: string;

    @Column({ field: 'status' })
    status: string;

    @Column({ field: 'accno' })
    accno: string;
}
