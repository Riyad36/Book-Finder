import axios from "axios";

const GBook = axios.create({
  baseURL: "https://www.googleapis.com/books/v1",
});



const getBooksByTerm = (SearchTerm, setBooks) => {
  GBook.get("/volumes", {
    params: {
      q : SearchTerm,
      key: "AIzaSyDZrUhwZpkOFphfQAFlf9bqX2PGBAxdc9s"
    },
  }).then((response) => {
    setBooks(response.data);
    //setTotalPages(response.data.total_pages);
  });
};

// const getBookDetails = (bookID, setCurrentBook) => {
//   GBook.get("volumes/" + bookID, {
//     params: {
//       api_key: "AIzaSyDZrUhwZpkOFphfQAFlf9bqX2PGBAxdc9s",
//     },
//   }).then((response) => {
//     console.log(response.data);
//     setCurrentBook(response.data);
//   });
// };

export { getBooksByTerm };
