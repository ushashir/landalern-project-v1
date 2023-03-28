import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Loan } from './schemas/loan.schema';

@Injectable()
export class LoanService {
  constructor(
    @InjectModel(Loan.name)
    private loanModel: mongoose.Model<Loan>,
  ) {}

  async findAll(): Promise<Loan[]> {
    const books = await this.loanModel.find();
    return books;
  }

  async create(book: Loan): Promise<Loan> {
    const res = await this.loanModel.create(book);
    return res;
  }

  async findById(id: string): Promise<Loan> {
    const book = await this.loanModel.findById(id);

    if (!book) {
      throw new NotFoundException('Loan not found.');
    }

    return book;
  }

  async updateById(id: string, book: Loan): Promise<Loan> {
    return await this.loanModel.findByIdAndUpdate(id, book, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Loan> {
    return await this.loanModel.findByIdAndDelete(id);
  }
}
