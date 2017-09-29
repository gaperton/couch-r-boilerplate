import { Cluster, define, prop } from 'couch-r'
import { TrackerBucket } from './couch-r-test'

@define
export class Database extends Cluster {
    static instance : Database;
    static connection = 'couchbase://localhost/';

    @prop( TrackerBucket ) tracker : TrackerBucket
}
