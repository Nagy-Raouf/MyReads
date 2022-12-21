import "../css/App.css";
import PropTypes from "prop-types";
import Book from "./Book";

const BookList = ({ books, updateBookShelf }) => {
  return (
    <ol className="books-grid">
      {books.map((book) => (
        <Book key={book.id} book={book} updateBookShelf={updateBookShelf} />
      ))}
    </ol>
  );
};

BookList.prototype = {
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default BookList;
