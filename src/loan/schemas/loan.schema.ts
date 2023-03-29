import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Category {
  SHORTTERM = 'Short-Term',
  MIDTERM = 'Mid-Term',
  LONGTERM = 'LongTerm',
}

@Schema({
  timestamps: true,
})
export class Loan {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  interestRate: string;

  @Prop()
  amount: number;

  @Prop()
  category: Category;
}

export const LoanSchema = SchemaFactory.createForClass(Loan);
