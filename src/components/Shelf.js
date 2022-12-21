import "../css/App.css";
import PropTypes from "prop-types";
import BookList from "./BookList";

const Shelf = ({ books, shelf, shelfTitle, updateBookShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <BookList
          books={books}
          shelf={shelf}
          updateBookShelf={updateBookShelf}
        />
      </div>
    </div>
  );
};

Shelf.prototype = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired,
  shelfTitle: PropTypes.string.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default Shelf;
