"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const couch_r_1 = require("couch-r");
const users_1 = require("./users");
let Message = class Message extends couch_r_1.Document {
};
__decorate([
    couch_r_1.prop(users_1.User.id.isRequired)
], Message.prototype, "author_id", void 0);
__decorate([
    couch_r_1.prop(String)
], Message.prototype, "body", void 0);
__decorate([
    couch_r_1.prop(Date.timestamp)
], Message.prototype, "createdAt", void 0);
Message = __decorate([
    couch_r_1.define
], Message);
exports.Message = Message;
let Post = class Post extends Message {
};
__decorate([
    couch_r_1.prop(String.isRequired)
], Post.prototype, "topic_id", void 0);
Post = __decorate([
    couch_r_1.define
], Post);
exports.Post = Post;
let Posts = class Posts extends couch_r_1.DocumentsCollection {
};
Posts.Document = Post;
Posts.key = {
    type: "p",
    code: doc => [doc.topic_id]
};
Posts = __decorate([
    couch_r_1.define
], Posts);
exports.Posts = Posts;
//# sourceMappingURL=posts.js.map