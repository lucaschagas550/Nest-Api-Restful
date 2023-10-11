import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { ProdutoModule } from './produto/produto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres.config.service';

@Module({
  imports: [
    UsuarioModule,
    ProdutoModule,
    TypeOrmModule.forRootAsync({ // Config do banco de dados
      useClass: PostgresConfigService,
      inject: [PostgresConfigService]
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
