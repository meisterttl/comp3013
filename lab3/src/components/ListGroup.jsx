import { useState } from "react";

function ListGroup() {
  const [activeCity, setActiveCity] = useState("");
  const items = ["New York", "Paris", "Tokyo", "London"];

  return (
    <>
      <h1>
        {!activeCity ? "No cities are selected" : `${activeCity} selected`}
      </h1>
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item}
            className={
              activeCity === item ? "list-group-item active" : "list-group-item"
            }
            onClick={() => setActiveCity(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
