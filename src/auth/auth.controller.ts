import { UserLoginRequestDto } from './dto/user-login-request.dto';
import {
    Controller,
    Get,
    Post,
    Body,
    HttpCode,
    Delete,
    Req,
    UseGuards,
    Put,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiUseTags, ApiOkResponse, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { UserLoginResponseDto } from './dto/user-login-response.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
@ApiUseTags('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    @ApiOperation({ title: '获取 token' })
    @HttpCode(200)
    @ApiOkResponse({ type: UserLoginResponseDto })
    login(@Body() userLoginRequestDto: UserLoginRequestDto): Promise<object> {
        return this.authService.login(userLoginRequestDto);
    }
}
