
import {React,Component, useState,useEffect } from "react";
import { Book } from './Book'
import { BookDetail } from "./BookDetail";

function BookList(props){
    const [books,setBooks]= useState([])
   
    // const books = [
    //     { title: 'Book 1', author: 'Author 1', year: 2020 },
    //     { title: 'Book 2', author: 'Author 2', year: 2018 },
    //     { title: 'Book 3', author: 'Author 3', year: 2022 },
    //     // Add more books if you'd like
    //     // read how map function workd
    //   ];
    return(
        // maps takes a callbck function which is that is extecuted for each item in aaray
         // map return the array of jsx element
        //{/* <BookDetail bookDetail={book} key={index}></BookDetail> */} 
         <>
         {books.length===0? <h1>Sorry!!-Nothing to display-No Books in the system</h1>:
         <ol> {books.map((book,index) => (<li><BookDetail bookDetail={book}></BookDetail></li>))} </ol>
         }
         </>              
        
    )

}
export {BookList}