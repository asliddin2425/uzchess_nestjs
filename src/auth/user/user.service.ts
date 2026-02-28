import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { plainToInstance } from "class-transformer";
import { UserListDto } from "./dtos/user.list";
import { UserCreateDto } from "./dtos/user.create";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserService {
    constructor (
        @InjectRepository(User)
        private readonly repo: Repository<User>,
    ) {}



    async getAll() {
        const rawUsers = await this.repo.find();
        const users = plainToInstance(
            UserListDto, 
            rawUsers,
            {
                excludeExtraneousValues: true
            }
        )
        return users;
    }


    async getOne(id: number) {
        const rawUsers = await this.repo.findOneBy({id})
        if(!rawUsers) {
            throw new NotFoundException("Not Found")
        }
        return plainToInstance(UserListDto, rawUsers, {
            excludeExtraneousValues: true
        })
    } 


    async create(payload: UserCreateDto) {
        const newUser = this.repo.create(payload as unknown as User);
        await this.repo.save(newUser)
        return plainToInstance(UserListDto, newUser, {
            excludeExtraneousValues: true
        })
    }


    async delete(id: number) {
        const user = await this.repo.findOneBy({id})
        if(!user) {
            throw new NotFoundException("Not Found")
        }
        return await this.repo.remove(user)
    }




}