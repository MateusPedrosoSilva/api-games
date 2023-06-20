import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlatformsService } from './platforms.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePlatformDto } from './dto/createPlataform.dto';

@ApiTags('platforms')
@Controller('platforms')
export class PlatformsController {
  constructor(private readonly platformService: PlatformsService) {}

  @Get('getPlatforms')
  getPlatforms() {
    return this.platformService.getPlatforms();
  }

  @Post('addPlatform')
  addPlatform(@Body() platform: CreatePlatformDto) {
    return this.platformService.addPlatform(platform);
  }
}
