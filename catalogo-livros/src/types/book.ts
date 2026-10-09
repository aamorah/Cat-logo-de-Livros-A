export interface Book {
  _id: string;
  title: string;
  author: string;
  status: "Lido" | "Não lido";
}

export interface BookItemProps {
  book: Book;
  onDelete: (id: string) => void;
}

export interface BookListProps {
  books: Book[];
  onDelete: (id: string) => void;
}

export interface BookFormProps {
  onAddBook: (book: Omit<Book, "_id">) => void;
}
