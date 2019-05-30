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
    tableName: 't_device',
})
export class Device extends Model<Device> {
    @PrimaryKey
    @Column({ field: 'deviceid' })
    deviceid: string;

    @Column({ field: 'fdeviceid' })
    fdeviceid: string;

    @Column({ field: 'devicename' })
    devicename: string;

    @Column({ field: 'devphyid' })
    devphyid: string;

    @Column({ field: 'deviceno' })
    deviceno: string;

    @Column({ field: 'devphytype' })
    devphytype: string;

    @Column({ field: 'devtypecode' })
    devtypecode: string;

    @Column({ field: 'devverno' })
    devverno: string;

    @Column({ field: 'status' })
    status: string;
}
