import styles from "./List.module.scss";
import Column from "../Column/Column";
import { useState } from "react";
import shortid from "shortid";
import ColumnForm from "../ColumnForm/ColumnForm";

const List = () => {
  const [columns, setColumns] = useState([
    {
      id: 1,
      title: "Books",
      icon: "book",
      cards: [
        { id: 1, title: "Pomnik Cesarzowej Achai" },
        { id: 2, title: "Szogun" },
      ],
    },
    {
      id: 2,
      title: "Programming",
      icon: "code",
      cards: [
        { id: 1, title: "JavaScript" },
        { id: 2, title: "Python" },
      ],
    },
    {
      id: 3,
      title: "Handcraft",
      icon: "camera",
      cards: [
        { id: 1, title: "Skrzynia skarbów" },
        { id: 2, title: "Pudełko na kosmetyki do łazienki" },
      ],
    },
  ]);

  const addColumn = (newColumn) => {
    setColumns([
      ...columns,
      {
        id: shortid(),
        title: newColumn.title,
        icon: newColumn.icon,
        cards: [],
      },
    ]);
  };

  const addCard = (newCard, columnId) => {
    const columnsUpdated = columns.map((column) => {
      if (column.id === columnId)
        return {
          ...column,
          cards: [...column.cards, { id: shortid(), title: newCard.title }],
        };
      else return column;
    });

    setColumns(columnsUpdated);
  };

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Interesting things to do <span>soon</span>.
        </h2>
      </header>
      <p className={styles.description}>My personal bucket list</p>
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column
            key={column.id}
            id={column.id}
            title={column.title}
            icon={column.icon}
            cards={column.cards}
            addCard={addCard}
          />
        ))}
      </section>
      <ColumnForm action={addColumn} />
    </div>
  );
};

export default List;
