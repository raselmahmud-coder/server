import { GraphQLList } from "graphql";
import { Users } from "../../Entities/entittyUsers";
import { UserType } from "../typeDefs/typeDefsUser";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve() {
    //   Users: new Users(),
    return Users.find();
  },
};
