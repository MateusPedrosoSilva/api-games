import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlatformsService } from './platforms.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePlatformDto } from './dto/createPlataform.dto';

@ApiTags('platforms')
@Controller('platforms')
export class PlatformsController {
  constructor(private readonly platformService: PlatformsService) {}

  @Get('getPlatforms')
  @ApiOperation({ summary: 'Buscar todas as plataformas' })
  getPlatforms() {
    return this.platformService.getPlatforms();
  }

  @Post('addPlatform')
  @ApiOperation({ summary: 'Adicionar uma plataforma' })
  addPlatform(@Body() platform: CreatePlatformDto) {
    return this.platformService.addPlatform(platform);
  }
}
