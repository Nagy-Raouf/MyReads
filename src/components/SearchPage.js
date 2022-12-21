import "../css/App.css";
import * as BooksAPI from "../APIs/BooksAPI";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BookList from "./BookList";

const SearchPage = ({ appBooks }) => {
  const [searchBooks, setSearchBooks] = useState([]);
  const [query, setQuery] = useState("");

  const updateQuery = (query) => setQuery(query);

  const updateBookShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    const newList = searchBooks?.map((b) =>
      book.id === b.id ? { ...b, shelf } : b
    );
    setSearchBooks(newList);
  };

  useEffect(() => {
    const search = setTimeout(async () => {
      // API call
      if (query) {
        const res = await BooksAPI.search(query.trim(), 20);
        if ("error" in res) setSearchBooks([]);
        else {
          res?.forEach((book) => {
            book.shelf = "none";
            appBooks?.forEach((appBook) => {
              if (appBook.id === book.id) {
                book.shelf = appBook.shelf;
              }
            });
          });
          setSearchBooks(res);
        }
      }
    }, 2000);

    return () => {
      clearTimeout(search);
    };
  }, [query, appBooks]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            value={query}
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => updateQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <BookList books={searchBooks} updateBookShelf={updateBookShelf} />
      </div>
    </div>
  );
};

export default SearchPage;
