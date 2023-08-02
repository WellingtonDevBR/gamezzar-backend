import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { convertObjectToSnakeCase } from "../../../../@seedowrk/helper/objectConverter";
import { IUserRepository } from "../../../../domain/repository/IUserRepository";

interface Input {
  userName: string;
}

interface Output {
  first_name: string;
  last_name: string;
  user_name: string;
  avatar: string;
  created_at: string;
  preference: {
    status_message: string;
    shipment_in_person: boolean;
    shipment_by_postal: boolean;
    shipment_by_courier: boolean;
  };
  address: {
    address: string;
  };
  collections: [
    {
      game_id: string;
      title: string;
      image: string;
      disposition: number;
      details: {
        platform: string;
        region: string;
      };
    }
  ];
}

export class GetUserByUserNameUseCase implements UseCase<Input, Output> {
  constructor(private usersRepository: IUserRepository) {}
  async execute(request: Input): Promise<Output> {
    const user = await this.usersRepository.getByUserName(request.userName);

    const userFormmat: Output = {
      first_name: user.FirstName,
      last_name: user.LastName,
      user_name: user.UserName,
      avatar: user.Avatar,
      created_at: user.dataValues.CreatedAt,
      preference: {
        status_message: user.get().preference?.StatusMessage,
        shipment_in_person: user.get().preference?.ShipmentInPerson,
        shipment_by_postal: user.get().preference?.ShipmentPostal,
        shipment_by_courier: user.get().preference?.ShipmentCourier,
      },
      address: {
        address: user.get().address?.Address,
      },
      collections: user.get().collections.map((game: any) => {
        return {
          game_id: game.item.GameId,
          title: game.item.Title,
          image: game.item.Image,
          disposition: game.Disposition,
          details: {
            platform: game.hasplatform.Name,
            region: game.hasregion.Name,
          },
        };
      }),
    };
    return userFormmat;
  }
}
