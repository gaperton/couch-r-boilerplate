"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const couch_r_1 = require("couch-r");
let Topic = class Topic extends couch_r_1.Document {
};
__decorate([
    couch_r_1.prop(String)
], Topic.prototype, "name", void 0);
Topic = __decorate([
    couch_r_1.define
], Topic);
exports.Topic = Topic;
let Topics = class Topics extends couch_r_1.DocumentsCollection {
    async getTopics() {
        const { id } = this.bucket;
        return (await this.query(this.s_all)).map(x => (new Topic({ id: x.id, name: x.name })));
    }
    async createTestData() {
        for (let i = 0; i < 1000; i++) {
            await this.upsert({ name: `Topic ${i}` });
        }
    }
};
Topics.Document = Topic;
Topics.key = {
    type: 't'
};
__decorate([
    couch_r_1.index('name')
        .asProp
], Topics.prototype, "ix_topic_name", void 0);
__decorate([
    couch_r_1.select('name', 'meta(self).id')
        .asProp
], Topics.prototype, "s_all", void 0);
Topics = __decorate([
    couch_r_1.define
], Topics);
exports.Topics = Topics;
exports.default = new Topics();
//# sourceMappingURL=topics.js.map