"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const book_model_1 = require("./book.model");
const createBook = (payload) => {
    const result = book_model_1.Book.create(payload);
    return result;
};
const getAllBooks = () => {
    const result = book_model_1.Book.find();
    return result;
};
const getSingleBook = (id) => {
    const result = book_model_1.Book.findById(id);
    return result;
};
const deleteBook = (id) => {
    const result = book_model_1.Book.findByIdAndDelete(id);
    return result;
};
exports.BookService = {
    createBook,
    getAllBooks,
    getSingleBook,
    deleteBook
};
