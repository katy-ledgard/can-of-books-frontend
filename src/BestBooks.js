import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function BestBooks() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    const API = "http://localhost:8098/book";
    const results = await axios.get(API);
    console.log(results.data);
    setBooks(results.data);
  }

  return (
    <>
      {books
        ? books.map((book, key) => {
            return (
              <div key={key}>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <p>{book.status}</p>
              </div>
            );
          })
        : "There are no books to show"}
    </>
  );
}
