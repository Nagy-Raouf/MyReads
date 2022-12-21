import "../css/App.css";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

const MainPage = ({ books, updateBookShelf }) => {
  const bookFilter = (shelfType) =>
    books.filter((book) => book.shelf === shelfType);

  const shelfs = [
    {
      title: "Currently Reading",
      value: "currentlyReading",
    },
    { title: "Want to Read", value: "wantToRead" },
    { title: "Read", value: "read" },
  ];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelfs.map((shelf, index) => (
            <Shelf
              key={index}
              books={bookFilter(shelf.value)}
              shelf={shelf.value}
              shelfTitle={shelf.title}
              updateBookShelf={updateBookShelf}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default MainPage;
