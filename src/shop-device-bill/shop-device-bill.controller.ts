import {
    Controller,
    Req,
    Body,
    Post,
    UseGuards,
    Get,
    Param,
    ParseIntPipe,
    Delete,
    Put,
} from '@nestjs/common';
import {
    ApiUseTags,
    ApiCreatedResponse,
    ApiBearerAuth,
    ApiOkResponse,
    ApiImplicitParam,
    ApiOperation,
} from '@nestjs/swagger';
import { ShopDeviceBillService } from './shop-device-bill.service';
import { AuthGuard } from '@nestjs/passport';
import { ShopDeviceBill as ShopDeviceBillEntity } from './shop-device-bill.entity';
import { ShopDeviceBillDto } from './dto/shop-device-bill.dto';
import { Request } from 'express';

@Controller('shopDeviceBill')
@ApiUseTags('shopDeviceBill')
export class ShopDeviceBillController {
    constructor(private readonly shopDeviceBillService: ShopDeviceBillService) { }

    @Get('summary')
    @ApiOperation({ title: '获取概要信息，例如count' })
    @ApiOkResponse({ type: Object })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    summary(): Promise<object> {
        return this.shopDeviceBillService.summary();
    }

}
