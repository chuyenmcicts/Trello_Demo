import React, { useState, useEffect } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { isEmpty } from "lodash";

import Column from "components/Column/Column";
import { mapOrder } from "utilities/sort";
import { initialData } from "actions/initialData";

import "./ContentBoard.scss";

function ContentBoard() {
  const [board, setBoard] = useState("");

  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const boardData = initialData.boards.find(
      (board) => board.id === "board-1"
    );
    if (boardData) {
      setBoard(boardData);
      setColumns(mapOrder(boardData.columns, boardData.columnOrder, "id"));
    }
  }, []);

  const onColumnDrop = (dropResult) => {
    console.log(dropResult);
  };

  if (isEmpty(board)) {
    return <div className="not-found">Board not found</div>;
  }

  return (
    <>
      <div className="board-content">
        <Container
          orientation="horizontal"
          onDrop={onColumnDrop}
          getChildPayload={(index) => columns[index]}
          dragHandleSelector=".column-drag-handle"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: "column-drop-preview",
          }}
        >
          {columns.map((column, index) => (
            <Draggable key={index}>
              <Column column={column} />
            </Draggable>
          ))}
        </Container>
      </div>
    </>
  );
}

export default ContentBoard;
