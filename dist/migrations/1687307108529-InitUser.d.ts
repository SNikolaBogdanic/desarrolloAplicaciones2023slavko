import { MigrationInterface, QueryRunner } from "typeorm";
export declare class InitUser1687307108529 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
