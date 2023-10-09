import { React, useEffect, useState } from "react";

function BookDetail(props) {
  const [Detail, setDetail] = useState(0);
  const showDetail = () => {
    if (Detail === 0) {
      setDetail(1);
    } else {
      setDetail(0);
    }
  };
  return (
    <div>
      <h3>{props.bookDetail.title}</h3>
      <p>Author:{props.bookDetail.author}</p>
      <p>Year:{props.bookDetail.year}</p>
      {Detail ? (
        <>
          <p>Genere:{props.bookDetail.genere}</p>
          <p>Description:{props.bookDetail.desc} </p>
          <button type="checkbox" onClick={showDetail}>
            {" "}
            Hide Detail
          </button>
        </>
      ) : (
        <button type="checkbox" onClick={showDetail}>
          Show detail
        </button>
      )}
    </div>
  );
}
export { BookDetail };
