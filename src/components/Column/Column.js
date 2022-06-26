import React from "react";
import { Container, Draggable } from "react-smooth-dnd";

import Card from "components/Card/Card";
import { mapOrder } from "utilities/sort";

import "./Column.scss";

function Column(props) {
  const { column } = props;

  const cards = mapOrder(column.card, column.cardOrder, "id");

  const onCardDrop = () => {
    console.log("onCardDrop");
  };

  return (
    <>
      <div className="column">
        <header className="column-drag-handle">{column.title}</header>
        <div className="card-list">
          <Container
            groupName="col"
            onDrop={onCardDrop}
            getChildPayload={(index) => cards[index]}
            dragClass="card-ghost"
            dropClass="card-ghost-drop"
            dropPlaceholder={{
              animationDuration: 150,
              showOnTop: true,
              className: "card-drop-preview",
            }}
            dropPlaceholderAnimationDuration={200}
          >
            {cards.map((card, index) => (
              <Draggable key={index}>
                <Card card={card} />
              </Draggable>
            ))}
          </Container>
        </div>
        <footer>Add another card</footer>
      </div>
    </>
  );
}

export default Column;
