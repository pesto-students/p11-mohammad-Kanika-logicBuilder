import React, { useState } from "react";
import { BookDetail } from "./BookDetail";
import { BookList } from "./BookList";
function BookForm() {
  const [book, setBook] = useState({ title: "", author: "", year: "", id: "" });
  const generateId = () => {
    return Date.now().toString();
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const [title, author, year, genere, desc] = evt.target;
    if (
      title.value.trim() !== "" &&
      author.value.trim() !== "" &&
      year.value.trim() !== ""
    ) {
      const newBook = {
        id: generateId(),
        title: title.value,
        author: author.value,
        year: year.value,
        genere: genere?.value,
        desc: desc?.value,
      };
      setBook(newBook);
      evt.target.reset();
    } else {
      // Display an error message or handle the validation as needed
      console.log("Please fill in all fields");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="author" placeholder="Author" type="text" />
        <input name="title" placeholder="Title" type="text" />
        <input name="year" placeholder="Year" type="text" />
        <input name="genere" placeholder="genere" type="text" />
        <input name="desc" placeholder="desc" type="text" />
        <input type="submit" />
      </form>
      {<BookList newBook={book} />}
      {/* rad about event and how to deal it with */}
    </>
  );
}
export { BookForm };
