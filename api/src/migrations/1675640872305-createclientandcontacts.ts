import { MigrationInterface, QueryRunner } from "typeorm";

export class createclientandcontacts1675640872305 implements MigrationInterface {
    name = 'createclientandcontacts1675640872305'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "isActive" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "isActive"`);
    }

}
