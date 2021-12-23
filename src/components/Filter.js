import React, { useState } from "react";
import {items} from "./items";

const Filter = () => {
  const [filterText, setFilterText] = useState("");

  console.log(items)

  const datafilter = items.filter(
    item =>
      item.description.toLocaleLowerCase().includes(filterText) ||
      item.title.toLocaleLowerCase().includes(filterText)
  );

  const itemsToDisplay = filterText ? datafilter : items;

  return (
    <div style={{ padding: "20px 50px" }}>
      <h1>Search Title Description</h1>
      <input
        type="text"
        placeholder="Filter items by keyword"
        value={filterText}
        onChange={e => setFilterText(e.target.value.toLocaleLowerCase())}
      />
      <hr />
      {!datafilter.length && (
        <div>There are no items to display adjust your filter criteria</div>
      )}
      {itemsToDisplay.map(item => (
        <ul key={item.title}>
          <li>{item.title}</li>
          <li>{item.description}</li>
          <li>{item.author}</li>
        </ul>
      ))}
    </div>
  );
};

export default Filter;