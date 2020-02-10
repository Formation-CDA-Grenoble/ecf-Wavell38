import { Document } from 'mongoose';

export interface Chapter extends Document {
    readonly title: string,
    readonly text:string
}