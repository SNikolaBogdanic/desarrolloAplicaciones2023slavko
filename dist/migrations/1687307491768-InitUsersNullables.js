"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitUsersNullables1687307491768 = void 0;
class InitUsersNullables1687307491768 {
    constructor() {
        this.name = 'InitUsersNullables1687307491768';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "phone" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "address" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "imagelink" DROP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "imagelink" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "address" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "phone" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "email" SET NOT NULL`);
    }
}
exports.InitUsersNullables1687307491768 = InitUsersNullables1687307491768;
//# sourceMappingURL=1687307491768-InitUsersNullables.js.map