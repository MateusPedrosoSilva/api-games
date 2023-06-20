import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CreatePlatformDto } from './dto/createPlataform.dto';

@Injectable()
export class PlatformsService {
  constructor(
    @InjectDataSource('games_db') private readonly games_db: DataSource,
  ) {}

  async getPlatforms() {
    const query = `select * from platform`;
    try {
      const platforms = await this.games_db.query(query);
      return platforms;
    } catch (error) {
      return 'Erro ao buscar plataformas. Erro: ' + error;
    }
  }

  async addPlatform(platform: CreatePlatformDto) {
    const query = `insert into platform (name) values ('${platform.name}')`;
    try {
      await this.games_db.query(query);
      return 'Plataforma adicionada com sucesso.';
    } catch (error) {
      return 'Erro ao adicionar plataforma. Error: ' + error;
    }
  }
}
