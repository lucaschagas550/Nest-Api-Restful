import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm"
import { UsuarioEntity } from 'src/usuario/usuario.entity';

@Injectable()
export class PostgresConfigService implements TypeOrmModule {
    constructor(private configService: ConfigService) { }

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.configService.get<string>('DB_HOST'),
            port: this.configService.get<number>('DB_PORT'),
            username: this.configService.get<string>('DB_USERNAME'),
            password: this.configService.get<string>('DB_PASSWORD'),
            database: this.configService.get<string>('DB_NAME'),
            entities: [
                __dirname + '/../**/*.entity{.js,.ts}', //volta um diretorio / ** qualuer coisa que estiver dentro de src procure por /*.entity
            ],
            synchronize: true
        }
    }
}