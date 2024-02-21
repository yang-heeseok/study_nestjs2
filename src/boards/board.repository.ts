import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

// @EntityRepository(Board)
// export class BoardRepository extends Repository<Board> {}

/* 
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/auth.schema.user';
import { FilterQuery, Model } from 'mongoose';
import { UserDto, UserRequestDto } from '../dto/auth.dto.user';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(user: UserDto): Promise<User> {
    const created = await this.userModel.create(user);
    return created;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findByEmail(email: string): Promise<User | null> {
    const found = await this.userModel.findOne({ email: email });
    return found;
  }

  async findOne(filter: FilterQuery<UserDocument>) {
    const found = await this.userModel.findOne(filter).exec();
    return found;
  }

  async findPage(filter: FilterQuery<UserDocument>, start: number, page: number) {
    const found = await this.userModel.find(filter).limit(page).skip(start).exec();
    return found;
  }
}
*/

@Injectable()
export class BoardRepository {
  constructor(
    @InjectRepository(Board)
    private readonly yourEntityReposity: Repository<Board>,
  ) {}
}(
    async findAll(): Promise<Board[]>{
        return await this.yourEntityReposity.find()
    }
)
