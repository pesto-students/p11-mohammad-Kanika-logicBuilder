import {React} from 'react'

function BookDetail(props){
    return(
        <div>
        <h3>{props.bookDetail.title}</h3>
        <p>Author:{props.bookDetail.author}</p>
        <p>Year:{props.bookDetail.year}</p>
        </div>     
    )


}
export{BookDetail}
