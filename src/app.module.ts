import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GamesModule } from './games/games.module';
import { Game } from './games/entities/game.entity';
import { PlatformsModule } from './platforms/platforms.module';
import { Platform } from './platforms/entities/platform.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      name: 'games_db',
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.REMOTE_DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
      entities: [Game, Platform],
      synchronize: true,
    }),
    GamesModule,
    PlatformsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
