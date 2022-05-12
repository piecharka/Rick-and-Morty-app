import classes from "./Character.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CharacterContext from "../../store/character-context";
import FavouriteIcon from "../FavouriteIcon/FavouriteIcon";
const Character = (props) => {
  const ctx = useContext(CharacterContext);
  const characterDetailsHandler = () => {
    ctx.setCharacterDetailsId(props.item.id);
  };
  return (
    <div className={classes.item_box}>
      <img
        className={classes.item_img}
        src={props.item.image}
        alt={props.item.name}
      />
      <div className={classes.item_content}>
        <span className={classes.title_box}>
          <h3 className={classes.item_title}>{props.item.name}</h3>
          <FavouriteIcon id={props.item.id} />
        </span>
        <p>{props.item.species}</p>
        <p>{props.item.status}</p>
        <Link
          to={`/character/${props.item.id}`}
          onClick={characterDetailsHandler}
          className={classes.item_link}
        >
          Show more
        </Link>
      </div>
    </div>
  );
};

export default Character;
