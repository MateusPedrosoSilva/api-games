import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';

@ApiTags('Games')
@Controller('games')
export class GamesController {
  constructor(private readonly gamesServices: GamesService) {}

  @Get('getGames')
  @ApiOperation({ summary: 'Buscar todos os jogos' })
  getGames() {
    return this.gamesServices.getGames();
  }

  @Post('addGame')
  @ApiOperation({ summary: 'Adicionar um jogo' })
  addGame(@Body() game: CreateGameDto) {
    return this.gamesServices.addGame(game);
  }

  @Get('getPlayingGames')
  @ApiOperation({ summary: 'Buscar jogos que esta jogando' })
  getPlayingGames() {
    return this.gamesServices.getPlayingGames();
  }
}
