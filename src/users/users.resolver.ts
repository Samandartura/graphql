import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Mutation, Resolver , Query, Args, ID} from '@nestjs/graphql';
import { User } from './entities/user.entity';

@Resolver('users')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(()=>User)
  async createUser(@Args('createUser') createUserDto: CreateUserDto):Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Query(()=>[User])
  async findAllUser():Promise<User[]> {
    return this.usersService.findAll();
  }

  @Query(()=>User)
  findOneUser(@Args('id') id: number):Promise<User> {
    return this.usersService.findOne(id);
  }

  @Mutation(()=>User)
  async updateUser(@Args('id') id: number, @Args('updateUser') updateUserDto: UpdateUserDto):Promise<User> {
    return this.usersService.update(id, updateUserDto);
  }

  @Mutation(()=>Number)
  async removeUser(@Args('id',{type: ()=> ID}) id: number):Promise<number> {
    return this.usersService.remove(+id);
  }
}
