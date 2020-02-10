import { Controller, Get, Res, HttpCode, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) { }

    @Post()
    @HttpCode(201)
    async addBook(@Res() res, @Body() createBookDTO: CreateBookDTO) {
        const book = await this.booksService.addBook(createBookDTO);
        return res.json({
            message: "Book has been created successfully",
            book
        })
    }

    @Get()
    async getAllBooks(@Res() res) {
        const books = await this.booksService.getAllBooks();
        return res.json(books);
    }

    @Get(':ID')
    async getBook(@Res() res, @Param('ID') bookID) {
        const book = await this.booksService.getBook(bookID);
        if (!book) throw new NotFoundException('Book does not exist!');
        return res.json(book);
    }

    @Put(':ID')
    async updateCat(@Res() res, @Param('ID') bookID, @Body() createBookDTO: CreateBookDTO) {
        const book = await this.booksService.updateBook(bookID, createBookDTO);
        if (!book) throw new NotFoundException('Book does not exist!');
        return res.json({
            message: 'Book has been successfully updated',
            book
        });
    }

    @Delete(':ID')
    async deleteBook(@Res() res, @Param('ID') bookID) {
        const book = await this.booksService.deleteBook(bookID);
        if (!book) throw new NotFoundException('Book does not exist!');
        return res.json({
            message: 'Book has been deleted',
            book
        })
    }
}
