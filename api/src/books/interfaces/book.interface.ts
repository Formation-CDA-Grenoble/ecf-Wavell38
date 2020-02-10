import { Document } from 'mongoose';

export interface Book extends Document {
    readonly title: string;
    readonly categories: any[];
    readonly chapters: [{
    	title: string,
    	text:string
    }];
}