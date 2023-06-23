import { MigrationInterface, QueryRunner } from "typeorm";
export declare class InitUsersNotMorePersoData1687307856958 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
