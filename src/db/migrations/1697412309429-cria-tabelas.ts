import { MigrationInterface, QueryRunner } from "typeorm";

export class CriaTabelas1697412309429 implements MigrationInterface {
    name = 'CriaTabelas1697412309429'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produtos" ADD "tem_em_estoque" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "tem_em_estoque"`);
    }

}
