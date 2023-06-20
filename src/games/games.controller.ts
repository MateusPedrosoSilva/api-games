import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';

@ApiTags('games')
@Controller('games')
export class GamesController {
  constructor(private readonly gamesServices: GamesService) {}

  @Get('getGames')
  getGames() {
    return this.gamesServices.getGames();
  }

  @Post('addGame')
  addGame(@Body() game: CreateGameDto) {
    return this.gamesServices.addGame(game);
  }

  @Get('getPlayingGames')
  getPlayingGames() {
    return this.gamesServices.getPlayingGames();
  }
}
