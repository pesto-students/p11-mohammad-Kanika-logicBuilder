import React, { useState } from 'react'
import { BookDetail } from './BookDetail';
import {BookList } from './BookList';
function BookForm(){


    
    const[book,setBook]=useState([])
    const[submit,setSubmit]=useState(false);
    const handleSubmit=(evt)=>{
        evt.preventDefault();
        const title = evt.target.title.value;
        const author = evt.target.author.value;
        const year = evt.target.year.value;
      
        // const book={
        //     title:evt.target.title.value,
        //     author:evt.target.author.value,
        //     year:evt.target.year.value
        // }
        // setBook(book)
        //console.log(book)
        if (title.trim() !== "" && author.trim() !== "" && year.trim() !== "") {
            const newBook = {
              title: title,
              author: author,
              year: year,
            };
            setBook(newBook);
          } else {
            // Display an error message or handle the validation as needed
            console.log("Please fill in all fields");
          }

    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <input name="author" placeholder='Author' type="text"/>
        <input  name="title" placeholder='Title'type="text"/>
        <input name="year" placeholder='Year' type="number"/>
        <input  type="submit"/>
        </form>
        { <BookList newBook={book} />}
        </>
    )

    
}
export {BookForm}
