import React, { useState, useEffect } from "react";
import { getBookDetails } from "../api/GBook";
import { Link } from "react-router-dom";

const BookDetails = (props) => {
  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    getBookDetails(props.match.params.volumeId, setCurrentBook);
  }, []);

   //const imageURL = currentBook.volumeInfo.imageLinks.thumbnail

  return (
    <div>
      <div className="row">
        <div className="col s12 m8">
          <div className="card">
            <div className="card-image">
              {props.match!= null ? (
                <img
                  src="https://picsum.photos/300/600"
                  alt=""
                  style={{ width: "300", height: "600" }}
                />
              ) : (
                <img
                  src="https://picsum.photos/300/600"
                  alt=""
                  style={{ width: "300", height: "600" }}
                />
              )}
            </div>
            <div className="card-content">
              
              <p><b>Book Title : {currentBook.volumeInfo.title}</b></p>
              <p><b>Authors : {currentBook.volumeInfo.authors}</b></p>
              <p><b>Total Page : {currentBook.volumeInfo.printedPageCount}</b></p>
              <p><b>Published at : {currentBook.volumeInfo.publishedDate}</b></p>
              <p><b>Rating : {currentBook.volumeInfo.averageRating}</b></p>
              <p><b>Total Rater: {currentBook.volumeInfo.ratingsCount}</b></p>
              <p><b>Dsecription of the book...</b></p>
              <p><b>{currentBook.volumeInfo.description}</b></p>
              
            </div>
            <div className="card-action">
              <Link to="/">Go to search page!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
