import "../css/App.css";
import PropTypes from "prop-types";
import ShelfChanger from "./ShelfChanger";

const Book = ({ book, updateBookShelf }) => {
  const onChangeShelf = (newShelf) => {
    updateBookShelf(book, newShelf);
  };
  //const cover = book.imageLinks ? book.imageLinks.thumbnail : "noCover";
  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url(${book?.imageLinks?.thumbnail})`,
            }}
          ></div>
          <ShelfChanger
            shelf={book.shelf || "none"}
            onChangeShelf={onChangeShelf}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors &&
            book.authors.map((author, index) => (
              <span key={index}>{author}</span>
            ))}
        </div>
      </div>
    </li>
  );
};

Book.prototype = {
  book: PropTypes.object.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default Book;
