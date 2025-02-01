import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para permitir solicitudes de http://localhost:3001
  app.enableCors({
    origin: 'http://localhost:3001', // Aquí se especifica el origen de tu frontend
  });

  await app.listen(3000);
}
bootstrap();
