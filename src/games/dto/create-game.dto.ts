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

  @ApiProperty({
    example: 'Digital',
    description: 'Tipo de mídia do jogo a ser adicionado',
  })
  media: string;

  @ApiProperty({
    example: true,
    description: 'true se possuir o jogo',
    required: false,
  })
  have: boolean;

  @ApiProperty({
    example: false,
    description: 'true se estiver jogando o jogo',
    required: false,
  })
  playing: boolean;

  @ApiProperty({
    example: true,
    description: 'true se já tiver concluido o jogo',
    required: false,
  })
  done: boolean;

  @ApiProperty({
    example: false,
    description: 'true se deseja ter o jogo',
    required: false,
  })
  want: boolean;
}
