import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoanController } from './loan.controller';
import { LoanService } from './loan.service';
import { LoanSchema } from './schemas/loan.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Loan', schema: LoanSchema }])],
  controllers: [LoanController],
  providers: [LoanService],
})
export class LoanModule {}
