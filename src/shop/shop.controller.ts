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
import { ShopService } from './shop.service';
import { AuthGuard } from '@nestjs/passport';
import { Shop as ShopEntity } from './shop.entity';
import { ShopDto } from './dto/shop.dto';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';

@Controller('shop')
@ApiUseTags('shop')
export class ShopController {
    constructor(private readonly shopService: ShopService) { }

    @Get('')
    @ApiOkResponse({ type: [ShopDto] })
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    findAll(): Promise<ShopDto[]> {
        return this.shopService.findAll();
    }

    @Get(':shopid/ancestors')
    @ApiOkResponse({ type: [ShopDto] })
    @ApiImplicitParam({ name: 'shopid', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    findAllAncestors(@Param('shopid') shopid: string): Promise<ShopDto[]> {
        return this.shopService.findAllAncestors(shopid);
    }

    @Get('all-ids')
    @ApiOkResponse({ type: [String] })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    findAllIds(): Promise<string[]> {
        return this.shopService.findAllIds();
    }

    @Get('summary')
    @ApiOkResponse({ type: Object })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    summary(): Promise<object> {
        return this.shopService.summary();
    }

    @Get(':shopid')
    @ApiOkResponse({ type: ShopDto })
    @ApiImplicitParam({ name: 'shopid', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    findOne(@Param('shopid') shopid: string): Promise<ShopDto> {
        return this.shopService.findOne(shopid);
    }

}
