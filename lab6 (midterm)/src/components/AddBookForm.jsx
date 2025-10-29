import { useState } from "react";

const AddBookForm = ({ bookList, setBookList }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const formData = {
    title: "",
    author: "",
    coauthor: "",
    coverImg: "",
    rating: "",
  };

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "title":
        formData.title = e.currentTarget.value;
        break;
      case "author":
        formData.author = e.currentTarget.value;
        break;
      case "coauthor":
        formData.coauthor = e.currentTarget.value;
        break;
      case "url":
        formData.coverImg = e.currentTarget.value;
        break;
      case "rating":
        formData.rating = e.currentTarget.value;
        break;
    }

    if (
      "" !== formData.title &&
      "" !== formData.author &&
      "" !== formData.coverImg &&
      "" !== formData.rating
    )
      setIsDisabled(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.currentTarget.title.value.trim();
    const author = e.currentTarget.author.value.trim();
    const coauthor = e.currentTarget.coauthor.value.trim();
    const coverImg = e.currentTarget.url.value.trim();
    const rating = e.currentTarget.rating.value.trim();

    if (title && author && coverImg && rating) {
      setBookList([
        ...bookList,
        {
          id: crypto.randomUUID(),
          name: title,
          author: author,
          coauthor: coauthor,
          coverImg: coverImg,
          sequels: [],
          rating: rating,
        },
      ]);
    }
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="column">
          <label htmlFor="title">* Title</label>
          <input type="text" name="title" onChange={handleChange} required />
        </div>
      </div>
      <div className="form-row">
        <div className="column">
          <label htmlFor="author">* Author</label>
          <input type="text" name="author" onChange={handleChange} required />
        </div>
      </div>
      <div className="form-row">
        <div className="column">
          <label htmlFor="coauthor">Co-Author</label>
          <input type="text" name="coauthor" onChange={handleChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="column">
          <label htmlFor="url">* URL for Book Cover</label>
          <input type="text" name="url" onChange={handleChange} required />
        </div>
      </div>
      <div className="form-row">
        <div className="column">
          <label htmlFor="rating">* Rating</label>
          <input type="number" name="rating" onChange={handleChange} required />
        </div>
      </div>
      <div className="form-row">
        <div className="column">
          <button type="submit" disabled={isDisabled}>
            Add Book
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddBookForm;
