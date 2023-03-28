import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CallbackWithoutResultAndOptionalError } from 'mongoose';
import * as bcrypt from 'bcryptjs';

export enum UserRole {
  ADMIN = 'Admin',
  USER = 'User',
}

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  phone: number;

  @Prop()
  userRole: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre(
  'save',
  async function (next: CallbackWithoutResultAndOptionalError) {
    if (this.isModified('password')) {
      const saltOrRounds = 10;
      const passwordHash = await bcrypt.hash(this.password, saltOrRounds);
      this.password = passwordHash;
    }

    return next();
  },
);
