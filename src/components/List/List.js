import styles from "./List.module.scss";
import Column from "../Column/Column";
import { useState, useEffect } from "react";

const List = () => {
  const [columns, setColumns] = useState([
    { id: 1, title: 'Books', icon: 'book' },
    { id: 2, title: 'Movies', icon: 'film' },
    { id: 3, title: 'Games', icon: 'gamepad' }
]);

useEffect(() => {

  setTimeout(() => {
      setColumns([...columns, { id: 4, title: 'Test column'}]);
  }, 2000);

}, []);

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
          <Column key={column.id} title={column.title} icon={column.icon} />
        ))}
      </section>
    </div>
  );
};

export default List;
