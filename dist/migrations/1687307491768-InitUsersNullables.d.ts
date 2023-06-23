import { MigrationInterface, QueryRunner } from "typeorm";
export declare class InitUsersNullables1687307491768 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
