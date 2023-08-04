import React from "react";
import { useState } from "react";

export default function AddBook() {
  const [newBook, setnewBook] = useState(false)
  function renderForm (event) {
    setnewBook(!newBook)
    console.log(newBook);
  }

    return (
    <div>
      <button onClick={
        renderForm
      }>AddBook</button>
    </div>
  );
}
