const BookCover = ({ bookList, featuredBook }) => {
  const bookObj = bookList.find((book) => featuredBook === book.id);

  let rating = "";
  for (let i = 0; i < bookObj.rating; i++) {
    rating += `⭐️`;
  }

  return (
    <div className="book-cover">
      <figure>
        <img
          src={bookObj.coverImg}
          alt={`Book cover for ${bookObj.name}`}
          width={300}
        />
        <figcaption>
          <p>1. Title: {bookObj.name}</p>
          <p>2. Author: {bookObj.author}</p>
          <p>3. Rating: {rating}</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default BookCover;
