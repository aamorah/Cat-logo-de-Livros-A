import axios from "axios";
import type { Book } from "../types/book";

const API_URL ="https://crudcrud.com/api/0d1c80059e4c43508a9e0d7afe11881b/books";

export const getBooks = async (): Promise<Book[]> => {
  const response = await axios.get<Book[]>(API_URL);

  return response.data;
};

export const createBook = async (book: Omit<Book, "_id">): Promise<Book> => {
  const response = await axios.post<Book>(API_URL, book);

  return response.data;
};

export const deleteBook = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
