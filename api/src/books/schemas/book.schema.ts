import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
    title: String,
    categories: Array,
    chapters: [{
    	title: String,
    	text: String
    }],
});
