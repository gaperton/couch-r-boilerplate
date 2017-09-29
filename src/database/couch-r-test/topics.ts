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

    @select( 'name', 'meta(self).id' )
        .asProp 
        s_all : N1qlQuery;

    async getTopics() : Promise<Topic[]> {
        const { id } = this.bucket;

        return ( await this.query( this.s_all ) ).map( x => (
            new Topic({ id : x.id, name : x.name })
        ) );
    }

    async createTestData(){
        for( let i = 0; i < 1000; i++ ){
            await this.upsert({ name : `Topic ${i}` });
        }
    }
}

export default new Topics();