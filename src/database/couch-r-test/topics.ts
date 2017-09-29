import { Document, define, prop, DocumentsCollection, N1qlQuery, select, index } from 'couch-r'

@define
export class Topic extends Document {
    @prop( String ) name : string
}

@define
export class Topics extends DocumentsCollection<Topic> {
    static Document = Topic;
    static key = {
        type : 't'
    }

    @index( 'name' )
        .asProp
        ix_topic_name : N1qlQuery;

    @select( '*', 'meta(self).id' )
        .asProp 
        s_all : N1qlQuery;

    async getTopics() : Promise<Topic[]> {
        const { id } = this.bucket;

        return ( await this.query( this.s_all ) ).map( x => {
            const topic = new Topic( x[ id ] );
            topic.id = x.id;
            return topic;
        });
    }
}

export default new Topics();