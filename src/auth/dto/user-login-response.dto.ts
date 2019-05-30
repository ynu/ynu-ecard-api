import { ApiModelProperty } from '@nestjs/swagger';

export class UserLoginResponseDto {
    @ApiModelProperty()
    token: string;

    constructor(token?: string) {
        this.token = token;
    }
}
