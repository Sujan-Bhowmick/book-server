"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const book_service_1 = require("./book.service");
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield book_service_1.BookService.createBook(data);
        res.status(200).json({
            success: true,
            message: "Book created Successfully",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Book creation failed',
        });
    }
});
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.getAllBooks();
    res.status(200).json({
        success: true,
        message: "Book retrived Successfully",
        data: result
    });
});
const getSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield book_service_1.BookService.getSingleBook(id);
    res.status(200).json({
        success: true,
        message: "Book retrived Successfully",
        data: result
    });
});
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield book_service_1.BookService.deleteBook(id);
    res.status(200).json({
        success: true,
        message: "Book deleted Successfully",
        data: result
    });
});
exports.BookController = {
    createBook,
    getAllBooks,
    getSingleBook,
    deleteBook
};
