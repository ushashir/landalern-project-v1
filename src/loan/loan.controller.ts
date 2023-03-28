import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LoanService } from './loan.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { Loan } from './schemas/loan.schema';

@Controller('loans')
export class LoanController {
  constructor(private loanService: LoanService) {}

  @Get()
  async getAllBooks(): Promise<Loan[]> {
    return this.loanService.findAll();
  }

  @Post()
  async createBook(
    @Body()
    book: CreateLoanDto,
  ): Promise<Loan> {
    return this.loanService.create(book);
  }

  @Get(':id')
  async getLoan(
    @Param('id')
    id: string,
  ): Promise<Loan> {
    return this.loanService.findById(id);
  }

  @Put(':id')
  async updateLoan(
    @Param('id')
    id: string,
    @Body()
    book: UpdateLoanDto,
  ): Promise<Loan> {
    return this.loanService.updateById(id, book);
  }

  @Delete(':id')
  async deleteLoan(
    @Param('id')
    id: string,
  ): Promise<Loan> {
    return this.loanService.deleteById(id);
  }
}
