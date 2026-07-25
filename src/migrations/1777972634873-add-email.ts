import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEmail1777972634873 implements MigrationInterface {
    name = 'AddEmail1777972634873'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    }

}
