import { Injectable } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm"

@Injectable()
export class PostgresConfigService implements TypeOrmModule {
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: '127.0.0.1',
            port: 5432,
            password: 'root',
            database: 'root',
            entities: [],
            synchronize: true
        }
    }
}