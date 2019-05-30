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
    @ApiOkResponse({ type: [String] })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    findAllIds(): Promise<string[]> {
        return this.deviceService.findAllIds();
    }

    @Get('summary')
    @ApiOkResponse({ type: Object })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    summary(): Promise<object> {
        return this.deviceService.summary();
    }

    @Get(':deviceid')
    @ApiOkResponse({ type: DeviceDto })
    @ApiImplicitParam({ name: 'deviceid', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    findOne(@Param('deviceid') deviceid: string): Promise<DeviceDto> {
        return this.deviceService.findOne(deviceid);
    }

}
