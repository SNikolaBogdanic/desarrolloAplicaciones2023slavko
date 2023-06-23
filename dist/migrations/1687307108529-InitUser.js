"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitUser1687307108529 = void 0;
class InitUser1687307108529 {
    constructor() {
        this.name = 'InitUser1687307108529';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" character varying NOT NULL, "password" character varying NOT NULL, "email" character varying NOT NULL, "phone" integer NOT NULL, "address" character varying NOT NULL, "imagelink" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.InitUser1687307108529 = InitUser1687307108529;
//# sourceMappingURL=1687307108529-InitUser.js.map