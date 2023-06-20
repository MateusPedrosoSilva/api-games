import { ApiProperty } from '@nestjs/swagger';

export class CreatePlatformDto {
  @ApiProperty({
    example: 'Playstation 5',
    description: 'Nome da plataforma a ser adicionada',
  })
  name: string;
}
