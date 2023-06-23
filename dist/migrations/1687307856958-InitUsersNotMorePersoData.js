"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitUsersNotMorePersoData1687307856958 = void 0;
class InitUsersNotMorePersoData1687307856958 {
    constructor() {
        this.name = 'InitUsersNotMorePersoData1687307856958';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "imagelink"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "imagelink" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ADD "address" character varying`);
    }
}
exports.InitUsersNotMorePersoData1687307856958 = InitUsersNotMorePersoData1687307856958;
//# sourceMappingURL=1687307856958-InitUsersNotMorePersoData.js.map