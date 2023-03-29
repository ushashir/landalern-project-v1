import { Category } from '../schemas/loan.schema';

export class CreateLoanDto {
  readonly title: string;
  readonly description: string;
  readonly interestRate: string;
  readonly amount: number;
  readonly category: Category;
}
