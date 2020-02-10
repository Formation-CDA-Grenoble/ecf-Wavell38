import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './schemas/book.schema';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])],
  	providers: [BooksService],
  	controllers: [BooksController]
})
export class BooksModule {}
