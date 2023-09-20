import { IBook } from "./book.interface"
import { Book } from "./book.model"

const createBook = (payload: IBook): Promise<IBook | null> => {
  const result = Book.create(payload);

  return result;
};

const getAllBooks = (): Promise<IBook[]> => {
  const result = Book.find();

  return result;
}

const getSingleBook = (id: string): Promise<IBook | null> => {
  const result = Book.findById(id);

  return result;
}

const deleteBook = (id: string) => {
  const result = Book.findByIdAndDelete(id);

  return result;
}

export const BookService = {
  createBook,
  getAllBooks,
  getSingleBook,
  deleteBook
}