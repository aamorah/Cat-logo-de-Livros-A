import type { BookItemProps } from "../types/book";

export function BookItem({ book, onDelete }: BookItemProps) {
  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p
        className={
          book.status === "Lido" ? "Status status-read" : "Status status-unread"
        }
      >
        {book.status}
      </p>

      <button className="delete-button" onClick={() => onDelete(book._id)}>
        Remover
      </button>
    </div>
  );
}
