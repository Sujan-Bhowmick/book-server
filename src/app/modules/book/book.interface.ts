import { Model } from "mongoose";

export type IBook = {
  title: string;
  author: string;
  genre: string;
  image: string;
  publicationDate: string
};

export type BookModel = Model<IBook, Record<string, unknown>>;