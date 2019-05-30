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
import { ShopBillService } from './shop-bill.service';
import { AuthGuard } from '@nestjs/passport';
import { ShopBill as ShopBillEntity } from './shop-bill.entity';
import { ShopBillDto } from './dto/shop-bill.dto';
import { ShopBillQueryDto } from './dto/shop-bill-query.dto';
import { Request } from 'express';

@Controller('shopBill')
@ApiUseTags('shopBill')
export class ShopBillController {
    constructor(private readonly shopBillService: ShopBillService) { }

    @Post()
    @ApiOkResponse({ type: [ShopBillDto] })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    findByCondition(@Body() shopBillQueryDto: ShopBillQueryDto): Promise<ShopBillDto[]> {
        return this.shopBillService.findByCondition(shopBillQueryDto);
    }

    @Get('summary')
    @ApiOkResponse({ type: Object })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    summary(): Promise<object> {
        return this.shopBillService.summary();
    }

}
