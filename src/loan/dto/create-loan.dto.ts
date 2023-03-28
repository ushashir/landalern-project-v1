import { Category } from '../schemas/loan.schema';

export class CreateLoanDto {
  readonly title: string;
  readonly description: string;
  readonly interestRate: string;
  readonly price: number;
  readonly category: Category;
}
