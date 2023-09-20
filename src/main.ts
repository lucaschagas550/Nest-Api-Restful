import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Habilita o global pipes para as validacoes das propriedades da dto
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, //transforma o json para o tipo de objeto esperado na controller
      whitelist: true, //ignora propriedades que nao estao na dto
      forbidNonWhitelisted: true, //lanca erro se mandar dado no json que nao esta no dto
    })
  )
  await app.listen(3000);
}
bootstrap();
