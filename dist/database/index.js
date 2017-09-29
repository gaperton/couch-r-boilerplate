"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const couch_r_1 = require("couch-r");
const couch_r_test_1 = require("./couch-r-test");
let Database = class Database extends couch_r_1.Cluster {
};
Database.connection = 'couchbase://localhost/';
__decorate([
    couch_r_1.prop(couch_r_test_1.TrackerBucket)
], Database.prototype, "tracker", void 0);
Database = __decorate([
    couch_r_1.define
], Database);
exports.Database = Database;
//# sourceMappingURL=index.js.map