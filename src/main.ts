import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
     .setTitle('API analisis de sistemas')
     .setDescription('API para el analisis de sistemas')
      .setVersion('1.0')
      .addTag('analisis')
      .build();

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
  await app.listen(4000);
}
bootstrap();
