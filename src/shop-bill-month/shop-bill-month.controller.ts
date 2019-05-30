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
} from '@nestjs/swagger';
import { ShopBillMonthService } from './shop-bill-month.service';
import { AuthGuard } from '@nestjs/passport';
import { ShopBillMonth as ShopBillMonthEntity } from './shop-bill-month.entity';
import { ShopBillMonthDto } from './dto/shop-bill-month.dto';
import { ShopBillMonthQueryDto } from './dto/shop-bill-month-query.dto';
import { Request } from 'express';

@Controller('shopBillMonth')
@ApiUseTags('shopBillMonth')
export class ShopBillMonthController {
    constructor(private readonly shopBillMonthService: ShopBillMonthService) { }

    @Post()
    @ApiOkResponse({ type: [ShopBillMonthDto] })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    findByCondition(@Body() shopBillMonthQueryDto: ShopBillMonthQueryDto): Promise<ShopBillMonthDto[]> {
        return this.shopBillMonthService.findByCondition(shopBillMonthQueryDto);
    }

    @Get('summary')
    @ApiOkResponse({ type: Object })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    summary(): Promise<object> {
        return this.shopBillMonthService.summary();
    }


}
