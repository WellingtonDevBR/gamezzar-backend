"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `#graphql
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
    address: String!
  }

  type Game {
    id: ID!
    name: String!
    description: String!
    price: Float!
    image: String!
    owner: User!
  }

  type Message {
    id: ID!
    content: String!
    sender: User!
    receiver: User!
    game: Game!
    status: String!
  }

  type Conversation {
    id: ID!
    userOne: User!
    userTwo: User!
    messages: [Message!]!
  }

  type Query {
    getUser(id: ID!): User
    getGame(id: ID!): Game
    # Add more query fields as needed
  }


  type Mutation {
    messageUser(senderId: ID!, receiverId: ID!, content: String!, gameId: ID!): Message!
  }
`;
//# sourceMappingURL=schema.js.map