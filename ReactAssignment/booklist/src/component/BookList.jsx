
import {React,Component, useState,useEffect } from "react";
import { BookDetail } from "./BookDetail";

function BookList(props){
  
    const [books,setBooks]= useState([])
    useEffect(()=>{
        // dicuss with sir that till the time i was doing 
        if (props.newBook.title && props.newBook.author && props.newBook.year){
            setBooks((prevBooks) => [...prevBooks, props.newBook]);
        }
    },[props.newBook])
    const deleteBook=(id)=>{
        const updatedBooks= books.filter((book)=>book.id!==id);
        setBooks(updatedBooks);

    }
    return(
        // maps takes a callbck function which is that is extecuted for each item in aaray
         // map return the array of jsx element
        //{/* <BookDetail bookDetail={book} key={index}></BookDetail> */} 
         <>
         {console.log(books)}
         {books.length===0 ? <h1>Sorry!!-Nothing to display-No Books in the system</h1>:
         <ol> {books.map((book) => (<><li key={book.id}><BookDetail bookDetail={book}></BookDetail></li>
         <button onClick={()=>deleteBook(book.id)}>Delete</button>
         </>))
         } </ol>
         }
         </>              
        
    )

}
export {BookList}