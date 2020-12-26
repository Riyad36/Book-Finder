 import React from "react";
// import { Link } from "react-router-dom";

 const Book = (props) => {

   return (
       <div className="row">
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
        <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{ width: "100", height: "200" }}
            />
          <span className="card-title">{props.data.authors}</span>
          {/* <a className="btn-floating halfway-fab waves-effect waves-light red">
        <i className="material-icons">add</i>
        </a> */}
        </div>
        <div className="card-content">

        {props.data.volumeInfo.authors}
        
        </div>
      </div>
    </div>
    </div>
  );
};

export default Book;



//           {props.data.poster_path == null ? (

//           ) : (
//             <img
//             src="https://picsum.photos/250/350"
//               alt=""
//               style={{ width: "100", height: "200" }}
//             />
//           )}


/* <Link
to={{
  pathname: "/volumes/" + props.data.id,
  book_id: props.data.id,
}}
>
See Details
</Link> */