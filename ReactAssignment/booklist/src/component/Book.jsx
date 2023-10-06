
import React from 'react';
function Book(props){
    
    return(
        <div>
            <h3>{props.bookDetails.title}</h3>
            <p>Author:{props.bookDetails.author}</p>
            <p>Year:{props.bookDetails.year}</p>
        </div>
    )


}
export {Book};