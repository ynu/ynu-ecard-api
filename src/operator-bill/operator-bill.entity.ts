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
    tableName: 't_operator_bill',
})
export class OperatorBill extends Model<OperatorBill> {
    @PrimaryKey
    @Column({ field: 'primarykey' })
    primarykey: string;
    @Column({ field: 'accdate' })
    accdate: string;
    @Column({ field: 'opercode' })
    opercode: string;
    @Column({ field: 'opername' })
    opername: string;
    @Column({ field: 'subjno' })
    subjno: string;
    @Column({ field: 'subjname' })
    subjname: string;
    @Column({ field: 'transtype' })
    transtype: string;
    @Column({ field: 'summary' })
    summary: string;
    @Column({ field: 'transcnt' })
    transcnt: string;
    @Column({ field: 'inamt' })
    inamt: string;
    @Column({ field: 'outamt' })
    outamt: string;
}
