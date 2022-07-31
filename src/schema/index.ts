import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CREATE_USER } from "./mutation/mutationUser";
import { GET_ALL_USERS } from "./queries/queriesUser";

const rootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {getAccountDetails:GET_ALL_USERS},
});
const mutation = new GraphQLObjectType({
  name: "mutation",
  fields: {addAccountDetails:CREATE_USER},
});

export const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: mutation,
});
