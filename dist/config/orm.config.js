"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppOS = exports.DataSourceConfig = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("../entities/user.entity");
config_1.ConfigModule.forRoot({
    envFilePath: ".env",
    isGlobal: true,
});
const DatabaseConfig = {
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: process.env.TYPEORM_SYNCHRONIZE == 'true',
    logging: process.env.TYPEORM_LOGGING == 'true',
    entities: [user_entity_1.User],
    migrations: [__dirname + '/../migrations/*{.ts, .js}']
};
class DataSourceFactory {
    constructor() { }
    static createDataSource() {
        return DatabaseConfig;
    }
}
const DataSourceConfig = DataSourceFactory.createDataSource();
exports.DataSourceConfig = DataSourceConfig;
exports.AppOS = new typeorm_1.DataSource(DataSourceConfig);
//# sourceMappingURL=orm.config.js.map