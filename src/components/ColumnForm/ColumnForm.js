import styles from "./ColumnForm.module.scss";
import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { useDispatch } from 'react-redux';

const ColumnForm = (props) => {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
    setTitle("");
    setIcon("");
  };
  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      Title:
      <div className={styles.padding}><TextInput value={title} onChange={(e) => setTitle(e.target.value)} /></div>
      Icon: <div className={styles.padding}><TextInput value={icon} onChange={(e) => setIcon(e.target.value)} /></div>
      <div className={styles.padding}><Button>Add column</Button></div>
    </form>
  );
};

export default ColumnForm;
