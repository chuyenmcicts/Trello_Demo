import React, { useState, useEffect } from "react";
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

  if (isEmpty(board)) {
    return <div className="not-found">Board not found</div>;
  }

  return (
    <>
      <div className="board-content">
        {columns.map((column, index) => (
          <Column key={index} column={column} />
        ))}
      </div>
    </>
  );
}

export default ContentBoard;
