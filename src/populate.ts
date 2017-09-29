import { Database } from './database'
import { exit } from 'process'
import { tools } from 'couch-r'

tools.log.level = 5;

Database.instance.start(
    async ({ tracker }) => {
        await tracker.users.createTestData();  
        await tracker.topics.createTestData();
        exit( 0 );
    }
, { initialize : true });