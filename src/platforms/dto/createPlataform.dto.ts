import { ApiProperty } from '@nestjs/swagger';

export class CreatePlatformDto {
  @ApiProperty()
  name: string;
}
