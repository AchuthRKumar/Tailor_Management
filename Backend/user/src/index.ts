import {Schema, model, Document} from 'mongoose';

export interface UserInterface extends Document{
    userId: string;
    userRole: number;//0- admin, 1- customer, 2- tailor
    email: string;
}

const UserSceham = new Schema<User>