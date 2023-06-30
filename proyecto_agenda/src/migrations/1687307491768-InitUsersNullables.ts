import { MigrationInterface, QueryRunner } from "typeorm";

export class InitUsersNullables1687307491768 implements MigrationInterface {
    name = 'InitUsersNullables1687307491768'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "phone" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "address" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "imagelink" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "imagelink" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "address" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "phone" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "email" SET NOT NULL`);
    }

}
