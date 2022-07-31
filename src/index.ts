import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import { schema } from "./schema/index";
import { createConnection } from "typeorm";
import { Users } from "./Entities/entittyUsers";

const main = async () => {
  await createConnection({
    type: "postgres",
    url: `postgres://ycnfspnh:bZJSgf3z9BqU14MTVVhpsrwrt5J6nLqQ@kesavan.db.elephantsql.com/ycnfspnh`,
    logging: true,
    synchronize: false,
    entities: [Users],
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );
  app.listen(4000, () => {
    console.log("server is running on port 4000");
  });
};
main().catch((err) => {
  console.log("hello error" + err);
});
