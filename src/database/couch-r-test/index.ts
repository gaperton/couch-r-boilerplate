import { Bucket, define, prop } from 'couch-r'
import { Posts } from './posts';
import { Users } from './users';
import { Comments } from './comments';
import { Topics } from './topics';

@define
export class TrackerBucket extends Bucket {
    static id = 'tracker';

    @prop( Posts ) posts : Posts
    @prop( Users ) users : Users
    @prop( Comments ) comments : Comments
    @prop( Topics ) topics : Topics
}