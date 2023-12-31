import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('GAMES API')
    .setDescription('API for the games app')
    .setVersion(process.env.APP_VERSION)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(process.env.APP_API_ROUTE, app, document);
  await app.listen(process.env.APP_PORT);
}
bootstrap();
