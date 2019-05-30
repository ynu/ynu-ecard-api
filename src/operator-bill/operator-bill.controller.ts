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
import { OperatorBillService } from './operator-bill.service';
import { AuthGuard } from '@nestjs/passport';
import { OperatorBill as OperatorBillEntity } from './operator-bill.entity';
import { OperatorBillDto } from './dto/operator-bill.dto';
import { OperatorBillQueryDto } from './dto/operator-bill-query.dto';
import { Request } from 'express';

@Controller('operatorBill')
@ApiUseTags('operatorBill')
export class OperatorBillController {
    constructor(private readonly operatorBillService: OperatorBillService) { }

    @Post()
    @ApiOkResponse({ type: [OperatorBillDto] })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    findByCondition(@Body() operatorBillQueryDto: OperatorBillQueryDto): Promise<OperatorBillDto[]> {
        return this.operatorBillService.findByCondition(operatorBillQueryDto);
    }

    @Get('all-ids')
    @ApiOkResponse({ type: [String] })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    findAllIds(): Promise<string[]> {
        return this.operatorBillService.findAllIds();
    }

    @Get('summary')
    @ApiOkResponse({ type: Object })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    summary(): Promise<object> {
        return this.operatorBillService.summary();
    }

    @Get(':primarykey')
    @ApiOkResponse({ type: OperatorBillDto })
    @ApiImplicitParam({ name: 'primarykey', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    findOne(@Param('primarykey') primarykey: string): Promise<OperatorBillDto> {
        return this.operatorBillService.findOne(primarykey);
    }

}
