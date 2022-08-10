import styles from "./List.module.scss";
import Column from "../Column/Column";

const List = () => {
  const columns = [
    { id: 1, title: "Books", icon: "book" },
    { id: 2, title: "Coding", icon: "code" },
    { id: 3, title: "Handcfart", icon: "camera" },
  ];

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
