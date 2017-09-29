"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const couch_r_1 = require("couch-r");
const posts_1 = require("./posts");
const users_1 = require("./users");
const comments_1 = require("./comments");
const topics_1 = require("./topics");
let TrackerBucket = class TrackerBucket extends couch_r_1.Bucket {
};
TrackerBucket.id = 'tracker';
__decorate([
    couch_r_1.prop(posts_1.Posts)
], TrackerBucket.prototype, "posts", void 0);
__decorate([
    couch_r_1.prop(users_1.Users)
], TrackerBucket.prototype, "users", void 0);
__decorate([
    couch_r_1.prop(comments_1.Comments)
], TrackerBucket.prototype, "comments", void 0);
__decorate([
    couch_r_1.prop(topics_1.Topics)
], TrackerBucket.prototype, "topics", void 0);
TrackerBucket = __decorate([
    couch_r_1.define
], TrackerBucket);
exports.TrackerBucket = TrackerBucket;
//# sourceMappingURL=index.js.map