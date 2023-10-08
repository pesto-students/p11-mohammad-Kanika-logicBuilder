async function FetchListofBooks(){
    try{
         const books = [
            { title: 'Book 1', author: 'Author 1', year: 2020 },
            { title: 'Book 2', author: 'Author 2', year: 2018 },
            { title: 'Book 3', author: 'Author 3', year: 2022 },
            // Add more books if you'd like
          ];
          return books;
        // ques on promise handon on promise do 4 q

    }
    catch(err){
        console.log(err.message);
    }

}
export {FetchListofBooks}