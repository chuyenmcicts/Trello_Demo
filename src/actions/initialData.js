export const initialData = {
  boards: [
    {
      id: "board-1",
      columnOrder: ["column-1", "column-2", "column-3"],
      columns: [
        {
          id: "column-1",
          boardId: "board-1",
          title: "Todo column",
          cardOrder: ["card-1", "card-2", "card-3", "card-4"],
          card: [
            {
              id: "card-1",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 1",
              cover:
                "https://images.ctfassets.net/rz1oowkt5gyp/4gcdup5C0Z1rQEQDGfeWth/71156837ac2d75293bf0eec8010aeb6e/view.svg",
            },
            {
              id: "card-2",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 2",
              cover: null,
            },
            {
              id: "card-3",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 3",
              cover: null,
            },
            {
              id: "card-4",
              boardId: "board-1",
              columnId: "column-1",
              title: "Title of card 4",
              cover: null,
            },
          ],
        },
        {
          id: "column-2",
          boardId: "board-1",
          title: "Progress column",
          cardOrder: ["card-5", "card-6", "card-7"],
          card: [
            {
              id: "card-5",
              boardId: "board-1",
              columnId: "column-2",
              title: "Title of card 5",
              cover: null,
            },
            {
              id: "card-6",
              boardId: "board-1",
              columnId: "column-2",
              title: "Title of card 6",
              cover: null,
            },
            {
              id: "card-7",
              boardId: "board-1",
              columnId: "column-2",
              title: "Title of card 7",
              cover: null,
            },
          ],
        },
        {
          id: "column-3",
          boardId: "board-1",
          title: "Done column",
          cardOrder: ["card-7", "card-8", "card-9"],
          card: [
            {
              id: "card-7",
              boardId: "board-1",
              columnId: "column-4",
              title: "Title of card 7",
              cover: null,
            },
            {
              id: "card-8",
              boardId: "board-1",
              columnId: "column-3",
              title: "Title of card 8",
              cover: null,
            },
            {
              id: "card-9",
              boardId: "board-1",
              columnId: "column-3",
              title: "Title of card 9",
              cover: null,
            },
          ],
        },
      ],
    },
  ],
};
