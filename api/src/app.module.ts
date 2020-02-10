import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';

const options:any = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
}

const username:string = 'Ventdivin'
const password:string = 'Iyw746210ei4v7'
const dbName:string = 'ecf'
const db:string = `mongodb+srv://${username}:${password}@cluster0-itx0r.mongodb.net/${dbName}?retryWrites=true&w=majority`

@Module({
  imports: [MongooseModule.forRoot(db, options), BooksModule],
})
export class AppModule {}
