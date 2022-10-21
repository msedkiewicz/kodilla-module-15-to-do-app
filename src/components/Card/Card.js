import styles from "./Card.module.scss";
import clsx from "clsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCardFavourite } from "../../redux/store";

const Card = (props) => {
  const cardId = props.cardId;
  const [favouriteValue, setFavouriteValue] = useState(props.isFavourite);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    setFavouriteValue(!favouriteValue);
    dispatch(toggleCardFavourite(cardId));
  }; // omówić

  return (
    <li className={styles.card}>
      {props.title}{" "}
      <button
        onClick={handleClick}
        className={clsx(styles.button, props.isFavorite && styles.isActive)}
      >
        <span className={"fa fa-star-o"} />
      </button>
    </li>
  );
};

export default Card;
