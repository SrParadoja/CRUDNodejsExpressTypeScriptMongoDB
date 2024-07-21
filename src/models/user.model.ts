// src/models/user.model.ts
import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
    username: string;
    email: string; // 
    password: string;
}

const userSchema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true }, 
    password: { type: String, required: true },
});

export const UserModel = model<IUser>('User', userSchema);
