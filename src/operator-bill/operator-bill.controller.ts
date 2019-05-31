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
    @ApiOperation({ title: '根据 OperatorBillQueryDto 中的属性组合条件(and)查找' })
    @ApiOkResponse({ type: [OperatorBillDto] })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    findByCondition(@Body() operatorBillQueryDto: OperatorBillQueryDto): Promise<OperatorBillDto[]> {
        return this.operatorBillService.findByCondition(operatorBillQueryDto);
    }

    @Get('all-ids')
    @ApiOperation({ title: '获取所有的id' })
    @ApiOkResponse({ type: [String] })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    findAllIds(): Promise<string[]> {
        return this.operatorBillService.findAllIds();
    }

    @Get('summary')
    @ApiOperation({ title: '获取概要信息，例如count' })
    @ApiOkResponse({ type: Object })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    summary(): Promise<object> {
        return this.operatorBillService.summary();
    }

    @Get(':primarykey')
    @ApiOperation({ title: '根据id查找单条记录' })
    @ApiOkResponse({ type: OperatorBillDto })
    @ApiImplicitParam({ name: 'primarykey', required: true })
    @ApiBearerAuth()
    @UseGuards(AuthGuard('jwt'))
    findOne(@Param('primarykey') primarykey: string): Promise<OperatorBillDto> {
        return this.operatorBillService.findOne(primarykey);
    }

}
