import { UserRole } from '../schemas/user.schema';

export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly phone: number;
  readonly userRole: UserRole;
}
