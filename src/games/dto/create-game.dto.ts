import { ApiProperty } from '@nestjs/swagger';

export class CreateGameDto {
  @ApiProperty({
    example: 'Zelda: Breath of the wild',
    description: 'Nome do jogo a ser adicionado',
  })
  name: string;

  @ApiProperty({
    example: 'Nintendo Switch',
    description: 'Plataforma do jogo a ser adicionado',
  })
  plataform: string;
}
