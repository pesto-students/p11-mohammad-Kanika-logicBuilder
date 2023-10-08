
import React from "react";
import { Book } from './Book'
import { BookDetail } from "./BookDetail";

import { Component } from "react";

class BookList extends Component {
    // constructor(props) {
    //     super(props);
    // }
    
    render() {
        // console.log(this.props);
        // const { items } = this.props;
        const books = [
            { title: 'Book 1', author: 'Author 1', year: 2020 },
            { title: 'Book 2', author: 'Author 2', year: 2018 },
            { title: 'Book 3', author: 'Author 3', year: 2022 },
            // Add more books if you'd like
            // read how map function workd
          ];
      
        return (
            <>
             <ol>
                {books.map((book,index) => (
                    // maps takes a callbck function which is that is extecuted for each item in aaray
                    // map return the array of jsx element
                       
                        <li>
                            {/* <BookDetail bookDetail={book} key={index}></BookDetail> */}
                            <Book bookDetail={book}></Book>
                            
                        </li>

                   

                ))} </ol>
            </>
        )

    }

}
export {BookList}












///--------------Assigment 01 ----------------------------------------------------
// import React, { useState }  from "react";
// import {Book} from './Book'
// function BookList(){
//     // const[books,setBooks]= useState();
//     // let x= FetchListofBooks();
//     // setBooks(x);
//     const books = [
//         { title: 'Book 1', author: 'Author 1', year: 2020 },
//         { title: 'Book 2', author: 'Author 2', year: 2018 },
//         { title: 'Book 3', author: 'Author 3', year: 2022 },
//         // Add more books if you'd like
//         // read how map function workd
//       ];
//     return(
//         <>
//         {
//             // books.map((book)=>(<li>{book.author}{book.title}{book.year}</li>))
//             books.map((book)=><ol><li><Book bookDetails={book}></Book></li></ol>)
//         }
//         </>
//     )

// }
// export {BookList}