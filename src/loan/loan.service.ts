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
    const loans = await this.loanModel.find();
    return loans;
  }

  async create(loan: Loan): Promise<Loan> {
    const res = await this.loanModel.create(loan);
    return res;
  }

  async findById(id: string): Promise<Loan> {
    const loan = await this.loanModel.findById(id);

    if (!loan) {
      throw new NotFoundException('Loan not found.');
    }

    return loan;
  }

  async updateById(id: string, loan: Loan): Promise<Loan> {
    return await this.loanModel.findByIdAndUpdate(id, loan, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Loan> {
    return await this.loanModel.findByIdAndDelete(id);
  }
}
