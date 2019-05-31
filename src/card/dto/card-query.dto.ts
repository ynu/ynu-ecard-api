import { ApiModelProperty } from '@nestjs/swagger';
import { Card } from '../card.entity';
import { Length, IsString } from 'class-validator';

export class CardQueryDto {

    @ApiModelProperty({ required: false, default: '' })
    readonly stuempno: string;

    @ApiModelProperty({ required: false, default: '' })
    readonly custname: string;
}
