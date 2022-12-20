import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/postgresql";
import path from "path";
import { User } from "./entities/User";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: "lireddit_graphql",
  type: "postgresql",
  user: "postgres",
  password: "postgres",
  debug: !__prod__,
  port: 5432,
  allowGlobalContext: true,
} as Parameters<typeof MikroORM.init>[0];
