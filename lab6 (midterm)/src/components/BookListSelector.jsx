const BookListSelector = ({ bookList, setFeaturedBook }) => {
  return (
    <div className="book-lists">
      {bookList.map((book) => (
        <div key={book.id} className="book">
          <button onClick={() => setFeaturedBook(book.id)}>
            <img
              src={book.coverImg}
              alt={`Book cover for ${book.name}`}
              width={100}
            />
          </button>
          <p>{book.name}</p>
        </div>
      ))}
    </div>
  );
};

export default BookListSelector;
