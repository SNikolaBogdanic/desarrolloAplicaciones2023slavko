import { MigrationInterface, QueryRunner } from "typeorm";

export class InitUsersNotMorePersoData1687307856958 implements MigrationInterface {
    name = 'InitUsersNotMorePersoData1687307856958'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "imagelink"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "imagelink" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ADD "address" character varying`);
    }

}
