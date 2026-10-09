import type { BookListProps } from "../types/book";
import { BookItem } from "./BookItem";

export function BookList({ books, onDelete }: BookListProps) {
    if (books.length === 0) {
        return (
            <div className="empty-state">
                <p>Nenhum livro encontrado.</p>
                <span>Adicione seu primeiro livro acima! 📚</span>
            </div>
        );
    }

    return (
        <div className="book-list">
            {books.map((book) => (
                <BookItem
                key={book._id}
                book={book}
                onDelete={onDelete}
                />
            ))}
        </div>
    );
}