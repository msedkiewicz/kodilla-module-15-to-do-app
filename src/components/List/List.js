import styles from './List.module.scss'

const List = () => {
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>Interesting things to do <span>soon</span>.</h2>
      </header>
      <p className={styles.description}>My personal bucket list</p>
      <section className={styles.columns}>
        <article>
          <h3>Books</h3>
        </article>
        <article>
          <h3>Coding</h3>
        </article>
        <article>
          <h3>Handcraft</h3>
        </article>
      </section>
    </div>
  );
};

export default List;
