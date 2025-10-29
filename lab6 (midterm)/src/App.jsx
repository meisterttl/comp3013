import "./App.css";
import { useState } from "react";
import BookCover from "./components/BookCover";
import BookListSelector from "./components/BookListSelector";
import AddBookForm from "./components/AddBookForm";
import books from "./data";

const TopColumn = ({ bookList, featuredBook }) => {
  return (
    <div className="row">
      <BookCover bookList={bookList} featuredBook={featuredBook} />
    </div>
  );
};

const MiddleColumn = ({ bookList, featuredBook, setFeaturedBook }) => {
  return (
    <div className="row">
      <h1>Select a Book</h1>
      <BookListSelector
        bookList={bookList}
        featuredBook={featuredBook}
        setFeaturedBook={setFeaturedBook}
      />
    </div>
  );
};

const BottomColumn = ({ bookList, setBookList }) => {
  return (
    <div className="row">
      <h2>Add New Book</h2>
      <AddBookForm bookList={bookList} setBookList={setBookList} />
    </div>
  );
};

function App() {
  const [featuredBook, setFeaturedBook] = useState(0);
  const [bookList, setBookList] = useState(books);

  return (
    <>
      <TopColumn bookList={bookList} featuredBook={featuredBook} />
      <MiddleColumn
        bookList={bookList}
        featuredBook={featuredBook}
        setFeaturedBook={setFeaturedBook}
      />
      <BottomColumn bookList={bookList} setBookList={setBookList} />
    </>
  );
}

export default App;
