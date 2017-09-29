import { Document, define, prop, DocumentsCollection, N1qlQuery, select, index } from 'couch-r'

@define
export class User extends Document {
    @prop( String ) email : string
    @prop( String ) name  : string
}

@define
export class Users extends DocumentsCollection<User>{
    static instance : Users;
    static Document = User;

    static key = {
        type : 'u'
    }

    async createTestData(){
        for( let i = 0; i < 100; i++ ){
            await this.upsert({
                name : `User ${i}`,
                email : `${i}@user.com`
            });
        }
    }
}

export default Users.instance;