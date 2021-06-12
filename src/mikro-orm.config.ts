import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { MikroORM } from '@mikro-orm/core'
export default {
    entities: [Post],
    dbName: 'cloreddit_server',
    type: 'postgresql', // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
