 import React from "react";
// import { Link } from "react-router-dom";

 const Book = (props) => {
//  const ImageURL = "https://image.tmdb.org/t/p/w500/" + props.data.poster_path;
   return (
     <div>
       <div className="row">
    <div className="col s12 m8">
      <div className="card">
        <div className="card-image">
          <img src="images/sample-1.jpg"/>
          <span className="card-title">card title</span>
          <a className="btn-floating halfway-fab waves-effect waves-light red">
        <i className="material-icons">add</i>
        </a>
        </div>
        <div className="card-content">

          <p>
            Riyad-E-AL Muhafiz
          </p>
         
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Book;



//           {props.data.poster_path == null ? (
//             <img
//               src="https://picsum.photos/200/300"
//               alt=""
//               style={{ width: "100", height: "200" }}
//             />
//           ) : (
//             <img
//             src="https://picsum.photos/250/350"
//               alt=""
//               style={{ width: "100", height: "200" }}
//             />
//           )}


{/* <Link
to={{
  pathname: "/volumes/" + props.data.id,
  book_id: props.data.id,
}}
>
See Details
</Link> */}