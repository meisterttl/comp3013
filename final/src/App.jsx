import "./App.css";
import { useEffect, useState } from "react";
import { foods } from "./data";

function App() {
  const [dishes, setDishes] = useState(foods);
  const [dishesWithHTML, setDishesWithHTML] = useState([]);

  const handleChange = (e) => {
    const needle = e.currentTarget.value;
    const regex = new RegExp(String.raw`(${needle})`, "gi");

    const newDishes = dishes.map((dish) => ({
      ...dish,
      name: dish.name.replace(regex, `<mark>$1</mark>`),
      description: dish.description.replace(regex, `<mark>$1</mark>`),
    }));

    setDishesWithHTML(newDishes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = dishes.length;
    const dish = e.currentTarget.dish.value.trim();
    const description = e.currentTarget.description.value.trim();

    if ("" !== dish && "" !== description) {
      setDishes([
        ...dishes,
        {
          id: id,
          name: dish,
          description: description,
        },
      ]);

      e.currentTarget.dish.value = null;
      e.currentTarget.description.value = null;
    }
  };

  useEffect(() => {
    setDishesWithHTML(dishes);
  }, [dishes]);

  return (
    <>
      <div className="row">
        <div className="column">
          <label htmlFor="search">Search:</label>
          <input type="text" id="search" onChange={handleChange} />
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="column">
          <dl>
            {dishesWithHTML.map((dish) => (
              <div key={dish.id} className="dl-row">
                <dt dangerouslySetInnerHTML={{ __html: dish.name }} />
                <dd dangerouslySetInnerHTML={{ __html: dish.description }} />
              </div>
            ))}
          </dl>
        </div>
      </div>

      <hr />

      <form onSubmit={handleSubmit} className="food-form">
        <div className="row">
          <div className="column">
            <label htmlFor="dish">Food Name:</label>
            <input type="text" id="dish" required />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" required />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <button type="submit">Add Food</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
