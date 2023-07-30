// import { CreateUserConversationController } from "../../controllers/user-conversation/create/UserConversationCreateController";
// import { DynamoDbChatRepository } from "../sequelize/repositories/chat/DynamoDBChatRepository";
// import { DynamoDbUserConversationRepository } from "../sequelize/repositories/user-conversation/DynamoDbConversation";
// import { SqlServerUserRepository } from "../sequelize/repositories/user/SqlServerUserRepository";

// const userRepository = new SqlServerUserRepository();
// const userConversationRepository = new DynamoDbUserConversationRepository();
// const conversationRepository = new DynamoDbChatRepository();

// const messageUserUseCase = new CreateUserConversationController(
//   userRepository,
//   conversationRepository,
//   userConversationRepository
// );

// export const resolvers = {
//   Mutation: {
//     messageUser: async (
//       _: any,
//       { senderId, receiverId, content, gameId }: any
//     ) => {
//       await messageUserUseCase.execute({
//         senderId,
//         receiverId,
//         content,
//         gameId,
//       });
//     },
//   },
// };
