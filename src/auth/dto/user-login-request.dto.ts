import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class UserLoginRequestDto {
    @ApiModelProperty()
    @IsString()
    readonly username: string;

    @ApiModelProperty()
    @IsString()
    readonly password: string;
}
