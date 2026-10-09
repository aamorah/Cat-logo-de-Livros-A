import { useEffect, useState } from "react";
import type { Book } from "./types/book";
import { getBooks, createBook, deleteBook } from "./services/api";
import { BookList } from "./components/BookList";
import { BookForm } from "./components/BookForm";

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
        setError("Não foi possível carregar os livros");
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, []);

  const handleAddBook = async (book: Omit<Book, "_id">) => {
    try {
      const newBook = await createBook(book);
      setBooks((currentBooks) => [...currentBooks, newBook]);
    } catch (error) {
      console.error("Erro ao adicionar livro: ", error);
    }
  };

  const handleDeleteBook = async (id: string) => {
    try {
      await deleteBook(id);
      setBooks((currentBooks) =>
        currentBooks.filter((book) => book._id !== id),
      );
    } catch (error) {
      console.error("Erro ao remover livro: ", error);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Catálogo de Livros</h1>
      </header>

      <main className="app-content">
        <BookForm onAddBook={handleAddBook} />
        {loading ? (
          <p className="loading-message">Carregando livros...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <BookList books={books} onDelete={handleDeleteBook} />
        )}
      </main>
    </div>
  );
}

export default App;
