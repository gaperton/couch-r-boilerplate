"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const process_1 = require("process");
const couch_r_1 = require("couch-r");
couch_r_1.tools.log.level = 5;
database_1.Database.instance.start(async ({ tracker }) => {
    await tracker.users.createTestData();
    await tracker.topics.createTestData();
    process_1.exit(0);
}, { initialize: true });
//# sourceMappingURL=populate.js.map