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
import { CardService } from './card.service';
import { AuthGuard } from '@nestjs/passport';
import { Card as CardEntity } from './card.entity';
import { CardDto } from './dto/card.dto';
import { CardQueryDto } from './dto/card-query.dto';
import { Request } from 'express';

@Controller('card')
@ApiUseTags('card')
export class CardController {
    constructor(private readonly cardService: CardService) { }

    @Post()
    @ApiOkResponse({ type: [CardDto] })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    findByCondition(@Body() cardQueryDto: CardQueryDto): Promise<CardDto[]> {
        return this.cardService.findByCondition(cardQueryDto);
    }

    @Get('all-ids')
    @ApiOkResponse({ type: [String] })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    findAllIds(): Promise<string[]> {
        return this.cardService.findAllIds();
    }

    @Get('summary')
    @ApiOkResponse({ type: Object })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    summary(): Promise<object> {
        return this.cardService.summary();
    }

    @Get(':stuempno')
    @ApiOkResponse({ type: CardDto })
    @ApiImplicitParam({ name: 'stuempno', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    findOne(@Param('stuempno') stuempno: string): Promise<CardDto> {
        return this.cardService.findOne(stuempno);
    }

}
