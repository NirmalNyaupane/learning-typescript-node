import { UserEntity } from "../entities/user.entity";
import UserValidation from "../validation/user.validation";

class UserService {
  add = async (requestBody:UserValidation) => {
        const user = new UserEntity();
        user.email = requestBody.email;
        user.fullName = requestBody.fullName;
        user.password = requestBody.password;

        return await user.save();
  };
}

const userService = new UserService();

export default userService;
