import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
export default {
    entities: [Post],
    dbName: 'cloreddit_server',
    type: 'postgresql',
    debug: !__prod__,
};
//# sourceMappingURL=mikro-orm.config.js.map