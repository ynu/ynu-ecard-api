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
    @ApiOkResponse({ type: [String] })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    findAllIds(): Promise<string[]> {
        return this.shopDeviceService.findAllIds();
    }

    @Get('summary')
    @ApiOkResponse({ type: Object })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    summary(): Promise<object> {
        return this.shopDeviceService.summary();
    }

    @Get(':id')
    @ApiOkResponse({ type: ShopDeviceDto })
    @ApiImplicitParam({ name: 'id', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    findOne(@Param('id') id: string): Promise<ShopDeviceDto> {
        return this.shopDeviceService.findOne(id);
    }

}
