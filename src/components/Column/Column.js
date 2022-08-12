import styles from "./Column.module.scss";

const Column = (props) => {
  return (
    <article className={styles.column}>
      <h3 className={styles.title}>
        <span className={styles.icon + " fa fa-" + props.icon}></span>
        {props.title}
      </h3>
      <ul className={styles.cards}>
        {props.cards.map((card) => (
          <li key={card.id}>{card.title}</li>
        ))}
      </ul>
    </article>
  );
};

export default Column;
