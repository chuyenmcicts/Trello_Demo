import React from "react";

import Card from "components/Card/Card";
import { mapOrder } from "utilities/sort";

import "./Column.scss";

function Column(props) {
  const { column } = props;

  const cards = mapOrder(column.card, column.cardOrder, "id");

  return (
    <>
      <div className="column">
        <header>{column.title}</header>
        <ul className="card-list">
          {cards.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </ul>
        <footer>Add another card</footer>
      </div>
    </>
  );
}

export default Column;
