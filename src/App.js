import React, { useState } from "react";
import useSWR from "swr";

const foodList =
  "https://world.openfoodfacts.org/api/v0/product/737628064502.json";

const fetchJSON = async (endpoint) =>
  await fetch(endpoint).then((x) => x.json());

const App = () => {
  const { data } = useSWR(foodList, fetchJSON);
  const [selectedFood, setSelectedFood] = useState(null);

  if (!data?.product) return null;

  const listofFood = Object.keys(data.product);

  return (
    <div>
      <div>
        <select
          value={selectedFood}
          onChange={(e) => setSelectedFood(e.target.value)}
        >
          <option value={null}>---</option>
          {listofFood.map((product) => (
            <option value={product}>{product}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default App;
