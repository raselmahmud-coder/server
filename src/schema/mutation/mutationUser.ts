import { GraphQLInt, GraphQLList, GraphQLString } from "graphql";
import { Users } from "../../Entities/entittyUsers";
import { account, UserType } from "../typeDefs/typeDefsUser";

export const CREATE_USER = {
  type: UserType,
  args: {
    user_id: { type: GraphQLInt },
    user_name: { type: GraphQLString },
    bank_accounts: { type: new GraphQLList(GraphQLString) },
    // bank_accounts: { type: account },
  },
  resolve(parent: any, args: any) {
    console.log("this is parent", parent);
    console.log("this is args", args);
    // const user = new Users();{id name userName password}
    Users.save(args);
    // Users.insert(args);
    //   user.id = 1;
    //   user.name = "rasel";
    //   user.password = "123456";
    //   user.userName = "rasel123";
    return args;
  },
};
