import React from "react";
import { Link } from "react-router-dom";

const Book = (props) => {


  let imageUrl = props.data.volumeInfo.imageLinks.thumbnail


  return (
    <Link to={{
      pathname: "/volumes/" + props.data.id,
      book_id: props.data.id
    }}>


      <div className="col s12 m4">
        <div className="card large">
          <div className="card-image">
            {props.data.volumeInfo.imageLinks.thumbnail == null ? (

              <img
                src="https://picsum.photos/200/300"
                alt=""
                style={{ width: "100", height: "200" }}
              />
            ) : (
                <img
                  src={imageUrl}
                  alt=""
                  style={{ width: "100", height: "200" }}
                />
              )}

          </div>
          <div className="card-content">

            {props.data.volumeInfo.authors}

          </div>


        </div>
      </div>

    </Link>
  );
};

export default Book;