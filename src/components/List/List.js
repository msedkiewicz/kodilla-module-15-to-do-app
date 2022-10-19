import styles from "./List.module.scss";
import Column from "../Column/Column";
import ColumnForm from "../ColumnForm/ColumnForm";
import { useSelector } from "react-redux";
import { getColumnsByList, getListById } from "../../redux/store";
import NavBar from "../NavBar/NavBar";
import { useParams } from 'react-router';

const List = (props) => {
  const { listId } = useParams();
  const columns = useSelector((state) => getColumnsByList(state, listId)); // jw
  const listData = useSelector((state) => getListById(state, listId)); // hm?
  return (
    <>
    <NavBar />
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          {listData.title}
        </h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </section>
      <ColumnForm listId={listId} />
    </div>
    </>
  );
};

export default List;
