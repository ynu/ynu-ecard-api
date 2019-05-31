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
import { DeviceService } from './device.service';
import { AuthGuard } from '@nestjs/passport';
import { Device as DeviceEntity } from './device.entity';
import { DeviceDto } from './dto/device.dto';
import { Request } from 'express';

@Controller('device')
@ApiUseTags('device')
export class DeviceController {
    constructor(private readonly deviceService: DeviceService) { }

    @Get('all-ids')
    @ApiOperation({ title: '获取所有的id' })
    @ApiOkResponse({ type: [String] })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    findAllIds(): Promise<string[]> {
        return this.deviceService.findAllIds();
    }

    @Get('summary')
    @ApiOperation({ title: '获取概要信息，例如count' })
    @ApiOkResponse({ type: Object })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    summary(): Promise<object> {
        return this.deviceService.summary();
    }

    @Get(':deviceid')
    @ApiOperation({ title: '根据id查找单条记录' })
    @ApiOkResponse({ type: DeviceDto })
    @ApiImplicitParam({ name: 'deviceid', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    findOne(@Param('deviceid') deviceid: string): Promise<DeviceDto> {
        return this.deviceService.findOne(deviceid);
    }

}
