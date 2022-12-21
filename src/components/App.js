import "../css/App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "../APIs/BooksAPI";
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";

function App() {
  const [appBooks, setAppBooks] = useState([]);

  const getAppBooks = async () => {
    const res = await BooksAPI.getAll();
    setAppBooks(res);
  };

  const updateBookShelf = async (book, shelf) => {
    if (book.shelf !== shelf) {
      await BooksAPI.update(book, shelf);
      const newList = appBooks?.map((b) =>
        book.id === b.id ? { ...b, shelf } : b
      );
      setAppBooks(newList);
    }
  };

  // const adjustShelf = (resultBooks) =>
  // resultBooks.array.forEach((res) => {
  //   console.log(res);
  //   const book = appBooks.find(({ id }) => id === res.id);
  //   res.shelf = book?.shelf;
  // });

  // const adjustShelf = (resultBooks) =>
  // resultBooks.map(
  //   (res) => (res.shelf = appBooks.find(({ id }) => id === res.id).shelf)
  // );

  useEffect(() => {
    getAppBooks();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MainPage books={appBooks} updateBookShelf={updateBookShelf} />
          }
        />
        <Route path="/search" element={<SearchPage appBooks={appBooks} />} />
      </Routes>
    </div>
  );
}

export default App;
