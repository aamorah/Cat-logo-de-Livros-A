import { useState } from "react";
import type { FormEvent } from "react";
import type { BookFormProps } from "../types/book";

export function BookForm({ onAddBook }: BookFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState<"Lido" | "Não lido">("Não lido");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddBook({
      title,
      author,
      status,
    });

    setTitle("");
    setAuthor("");
    setStatus("Não lido");
  };

  return (
    <div className="glass-card">
      <form className="book-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Título</label>
        <input
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <label htmlFor="author">Autor</label>
        <input
          id="author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />

        <label htmlFor="status">Status</label>
        <select
          id="status"
          value={status}
          onChange={(event) => setStatus(event.target.value as "Lido" | "Não lido")}
        >
          <option value="Não lido">Não lido</option>
          <option value="Lido">Lido</option>
        </select>

        <button type="submit">Adicionar livro</button>
      </form>
    </div>
  );
}
