import {  Request, Response } from "express";
import { BookService } from "./book.service";

const createBook = async(req:Request, res:Response) => {

  try{
  const data = req.body;
  const result = await BookService.createBook(data);

  res.status(200).json({
    success: true,
    message: "Book created Successfully",
    data: result
  })
}catch(error){
  res.status(500).json({
    success: false,
    message: 'Book creation failed',
  });
}

}

const getAllBooks= async (req: Request, res: Response) => {
  const result = await BookService.getAllBooks();

  res.status(200).json({
    success: true,
    message: "Book retrived Successfully",
    data: result
  })
}

const getSingleBook= async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await BookService.getSingleBook(id);

  res.status(200).json({
    success: true,
    message: "Book retrived Successfully",
    data: result
  })
}

const deleteBook= async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await BookService.deleteBook(id);

  res.status(200).json({
    success: true,
    message: "Book deleted Successfully",
    data: result
  })
}

export const BookController = {
  createBook,
  getAllBooks,
  getSingleBook,
  deleteBook
}