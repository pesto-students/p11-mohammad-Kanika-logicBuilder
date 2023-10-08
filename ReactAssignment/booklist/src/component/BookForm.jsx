import React, { useState } from 'react'
import { BookDetail } from './BookDetail';
function BookForm(){
    const[book,setBook]=useState()
    const[submit,setSubmit]=useState(false);
    const handleSubmit=(evt)=>{
        const book={
            title:evt.title,
            author:evt.author,
            year:evt.year
        }
        setBook(book)
        console.log(book)
        setSubmit(true);
        

    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <input placeholder='Author' type="text"/>
        <input placeholder='Title'type="text"/>
        <input placeholder='Year' type="number"/>
        <input  type="submit"/>
        </form>
        </>
    )

    
}
export {BookForm}
