import { Category } from '../schemas/loan.schema';

export class UpdateLoanDto {
  readonly title: string;
  readonly description: string;
  readonly interestRate: string;
  readonly amount: number;
  readonly category: Category;
}
