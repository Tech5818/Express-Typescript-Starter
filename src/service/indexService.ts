import { User } from "@src/entities/user";
import { Inject, Service } from "typedi";
import { Repository } from "typeorm";

@Service()
export class IndexService {
    constructor(
        @Inject("UserRepository") private userRepository: Repository<User>
    ) {}

    async createUser(name: string) {
        const user = new User()
        user.text = name

        return await this.userRepository.save(user)
    }
}