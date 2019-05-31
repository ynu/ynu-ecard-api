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
import { ShopDeviceService } from './shop-device.service';
import { AuthGuard } from '@nestjs/passport';
import { ShopDevice as ShopDeviceEntity } from './shop-device.entity';
import { ShopDeviceDto } from './dto/shop-device.dto';
import { Request } from 'express';

@Controller('shopDevice')
@ApiUseTags('shopDevice')
export class ShopDeviceController {
    constructor(private readonly shopDeviceService: ShopDeviceService) { }

    @Get('all-ids')
    @ApiOperation({ title: '获取所有的id' })
    @ApiOkResponse({ type: [String] })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    findAllIds(): Promise<string[]> {
        return this.shopDeviceService.findAllIds();
    }

    @Get('summary')
    @ApiOperation({ title: '获取概要信息，例如count' })
    @ApiOkResponse({ type: Object })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    summary(): Promise<object> {
        return this.shopDeviceService.summary();
    }

    @Get(':id')
    @ApiOperation({ title: '根据id查找单条记录' })
    @ApiOkResponse({ type: ShopDeviceDto })
    @ApiImplicitParam({ name: 'id', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    findOne(@Param('id') id: string): Promise<ShopDeviceDto> {
        return this.shopDeviceService.findOne(id);
    }

}
