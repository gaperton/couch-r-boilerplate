import { Document, define, prop, DocumentsCollection, N1qlQuery, select, index } from 'couch-r'
import { Message, Post } from './posts'

@define class Comment extends Message {
    @prop( Post.id ) post_id : string
}

@define
export class Comments extends DocumentsCollection<Comment>{
    static Document = Comment;
    static key = {
        type : "c",
        code : doc => [ doc.post_id ]
    }

    @select( '*' )
        .where( 'post_id = $1' )
        .order_by( 'time' )
        .asProp
    s_commentsByPost : N1qlQuery

    @index( 'post_id', 'time' )
        .asProp
    ix_comments : N1qlQuery

    @select( 'post_id', 'max( time )' )
        .group_by( 'post_id' )
        .order_by( 'max( time )' )
        .asProp
    s_recentlyCommentedPosts : N1qlQuery
}

export default new Comments();