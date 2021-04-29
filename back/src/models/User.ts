import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email?: string;
  fullname?: string;
  password?: string;
}

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: 'email address is required',
      unique: true,
    },
    fullname: {
      type: String,
      required: 'Fullname address is required',
    },
    password: {
      type: String,
      required: 'Password address is required',
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
