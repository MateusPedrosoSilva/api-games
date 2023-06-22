import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CreateGameDto } from './dto/create-game.dto';

@Injectable()
export class GamesService {
  constructor(
    @InjectDataSource('games_db') private readonly games_db: DataSource,
  ) {}

  async getGames() {
    const query = `select * from game`;
    const games = await this.games_db.query(query);
    return games;
  }

  async addGame(game: CreateGameDto) {
    const query = `insert into game (name, plataform, media, playing, have, done, want) 
    values ('${game.name}', '${game.plataform}', '${game.media}', ${game.playing}, 
    ${game.have}, ${game.done}, ${game.want})`;
    try {
      await this.games_db.query(query);
      return 'jogo adicionado com sucesso';
    } catch (error) {
      return 'Erro ao salvar jogo. ERRO: ' + error;
    }
  }

  async getPlayingGames() {
    const query = `select * from game where playing = true`;
    try {
      const playingGames = await this.games_db.query(query);
      return playingGames;
    } catch (error) {
      return 'Erro ao buscar jogos que esta jogando. Error: ' + error;
    }
  }

  async getDoneGames() {
    const query = `select * from game where done = true`;
    try {
      const haveGames = await this.games_db.query(query);
      return haveGames;
    } catch (error) {
      return 'Erro ao buscar jogos que possui. Error: ' + error;
    }
  }

  async getWantedGames() {
    const query = `select * from game where want = true`;
    try {
      const wantedGames = await this.games_db.query(query);
      return wantedGames;
    } catch (error) {
      return 'Erro ao buscar jogos que deseja. Error: ' + error;
    }
  }

  async getHaveGames() {
    const query = `select * from game where have = true`;
    try {
      const haveGames = await this.games_db.query(query);
      return haveGames;
    } catch (error) {
      return 'Erro ao buscar jogos que possui. Error: ' + error;
    }
  }
}
