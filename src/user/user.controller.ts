import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  async createUser(
    @Body()
    book: CreateUserDto,
  ): Promise<User> {
    return this.userService.create(book);
  }

  @Get(':id')
  async getUser(
    @Param('id')
    id: string,
  ): Promise<User> {
    return this.userService.findById(id);
  }

  // @Get(':email')
  // async getUser(
  //   @Param('email')
  //   id: string,
  // ): Promise<User> {
  //   return this.userService.findById(id);
  // }

  @Put(':id')
  async updateUser(
    @Param('id')
    id: string,
    @Body()
    book: UpdateUserDto,
  ): Promise<User> {
    return this.userService.updateById(id, book);
  }

  @Delete(':id')
  async deleteUser(
    @Param('id')
    id: string,
  ): Promise<User> {
    return this.userService.deleteById(id);
  }
}
