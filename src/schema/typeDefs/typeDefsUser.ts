import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLList } from "graphql";
export const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    user_id: { type: GraphQLInt },
    user_name: { type: GraphQLString },
    bank_accounts: { type: new GraphQLList(GraphQLString) },
  }),
});
export const account = new GraphQLObjectType({
  name: "account",
  fields: {
    acc1: { type: GraphQLString },
    acc2: { type: GraphQLString },
  },
});
