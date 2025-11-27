import "./App.css";
import { useEffect, useState } from "react";
import { foods } from "./data";

function App() {
  const [dishes, setDishes] = useState(foods);
  const [processedDishes, setProcessedDishes] = useState([]);

  const handleChange = (e) => {
    setProcessedDishes(dishes);

    const needle = e.currentTarget.value;
    const regex = new RegExp(String.raw`${needle}`, "gi");

    const newDishes = dishes.map((dish) => {
      return {
        ...dish,
        name: dish.name.replace(regex, `<mark>${needle}</mark>`),
        description: dish.description.replace(regex, `<mark>${needle}</mark>`),
      };
    });

    if ("" === needle) {
      setProcessedDishes(dishes);
    } else {
      setProcessedDishes(newDishes);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = dishes.length;
    const dish = e.currentTarget.dish.value.trim();
    const description = e.currentTarget.description.value.trim();

    setDishes([
      ...dishes,
      {
        id: id,
        name: dish,
        description: description,
      },
    ]);
  };

  useEffect(() => {
    setProcessedDishes(dishes);
  }, [dishes]);

  return (
    <>
      <div className="form-row">
        <div className="column">
          <label htmlFor="search">Search:</label>
          <input type="text" id="search" onChange={handleChange} />
        </div>
      </div>

      <hr />

      <div className="form-row">
        <div className="column">
          <dl>
            {processedDishes.map((dish) => (
              <div key={dish.id} className="column">
                <dt dangerouslySetInnerHTML={{ __html: dish.name }} />
                <dd dangerouslySetInnerHTML={{ __html: dish.description }} />
              </div>
            ))}
          </dl>
        </div>
      </div>

      <hr />

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="column">
            <label htmlFor="dish">Name:</label>
            <input type="text" id="dish" />
          </div>
        </div>

        <div className="form-row">
          <div className="column">
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" />
          </div>
        </div>

        <div className="form-row">
          <div className="column">
            <button type="submit">Add Food</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
