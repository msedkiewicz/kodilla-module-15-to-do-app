import styles from "./Card.module.scss";
import clsx from "clsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCardFavourite } from "../../redux/cardsReducer";

const Card = (props) => {
  const cardId = props.cardId;
  const [favouriteValue, setFavouriteValue] = useState(props.isFavourite);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    setFavouriteValue(!favouriteValue);
    dispatch(toggleCardFavourite(cardId));
  };

  return (
    <li className={styles.card}>
      {props.title}{" "}
      <button
        onClick={handleClick}
        className={clsx(styles.button, props.isFavourite && styles.isActive)}
      >
        <i className={"fa fa-star"} />
      </button>
    </li>
  );
};

export default Card;
