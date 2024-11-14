import React, { useState } from "react";

function Item({ name, category }) {

  const [addItem, setAddItem]= useState(false);

  return (
    <li className={addItem ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={()=> setAddItem(!addItem)}>{addItem ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
