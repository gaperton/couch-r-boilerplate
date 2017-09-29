"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const couch_r_1 = require("couch-r");
let User = class User extends couch_r_1.Document {
};
__decorate([
    couch_r_1.prop(String)
], User.prototype, "email", void 0);
__decorate([
    couch_r_1.prop(String)
], User.prototype, "name", void 0);
User = __decorate([
    couch_r_1.define
], User);
exports.User = User;
let Users = class Users extends couch_r_1.DocumentsCollection {
    async createTestData() {
        for (let i = 0; i < 100; i++) {
            await this.upsert({
                name: `User ${i}`,
                email: `${i}@user.com`
            });
        }
    }
};
Users.Document = User;
Users.key = {
    type: 'u'
};
Users = __decorate([
    couch_r_1.define
], Users);
exports.Users = Users;
exports.default = Users.instance;
//# sourceMappingURL=users.js.map