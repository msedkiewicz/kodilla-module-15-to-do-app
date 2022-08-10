import styles from './List.module.scss'
import Column from '../Column/Column'

const List = () => {
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>Interesting things to do <span>soon</span>.</h2>
      </header>
      <p className={styles.description}>My personal bucket list</p>
      <section className={styles.columns}>
        <Column title="Books" />
        <Column title="Coding" />
        <Column title="Handcraft" />
      </section>
    </div>
  );
};

export default List;
