import { Document, define, prop, DocumentsCollection, N1qlQuery, select, index } from 'couch-r'
import { User } from './users'

@define
export class Message extends Document {
    @prop( User.id.isRequired ) author_id : string
    @prop( String )         body : string
    @prop( Date.timestamp ) createdAt : Date
}

@define
export class Post extends Message {
    @prop( String.isRequired )   topic_id : string
}

@define
export class Posts extends DocumentsCollection<Post> {
    static Document = Post;
    static key = {
        type : "p",
        code : doc => [ doc.topic_id ]
    }
}