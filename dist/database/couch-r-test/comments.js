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
let Comment = class Comment extends posts_1.Message {
};
__decorate([
    couch_r_1.prop(posts_1.Post.id)
], Comment.prototype, "post_id", void 0);
Comment = __decorate([
    couch_r_1.define
], Comment);
let Comments = class Comments extends couch_r_1.DocumentsCollection {
};
Comments.Document = Comment;
Comments.key = {
    type: "c",
    code: doc => [doc.post_id]
};
__decorate([
    couch_r_1.select('*')
        .where('post_id = $1')
        .order_by('time')
        .asProp
], Comments.prototype, "s_commentsByPost", void 0);
__decorate([
    couch_r_1.index('post_id', 'time')
        .asProp
], Comments.prototype, "ix_comments", void 0);
__decorate([
    couch_r_1.select('post_id', 'max( time )')
        .group_by('post_id')
        .order_by('max( time )')
        .asProp
], Comments.prototype, "s_recentlyCommentedPosts", void 0);
Comments = __decorate([
    couch_r_1.define
], Comments);
exports.Comments = Comments;
exports.default = new Comments();
//# sourceMappingURL=comments.js.map