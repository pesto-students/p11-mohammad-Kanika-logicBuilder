import React from "react"
class Book extends React.PureComponent{
    render(){
        return()=>{
            <div>
            <h3>knik</h3>
            <h3>{this.props.bookDetail.title}</h3>
            <p>Author:{this.props.bookDetail.author}</p>
            <p>Year:{this.props.bookDetail.year}</p>
            </div>
        }   
        
    }

}
export {Book}














//---------------assignmet 1 Implemetation--------------------------------------------------------------
// import React from 'react';
// function Book(props){
    
//     return(
//         <div>
//             <h3>{props.bookDetails.title}</h3>
//             <p>Author:{props.bookDetails.author}</p>
//             <p>Year:{props.bookDetails.year}</p>
//             <p>Key:{props.key}</p>
//         </div>
//     )


// }
// export {Book};