import classes from "./Character.module.css";
import { Link } from "react-router-dom";
import FavouriteIcon from "../UI/FavouriteIcon";
import StatusSign from "../UI/StatusSign";
const Character = ({ id, image, name, status, species }) => {
  return (
    <div className={classes.item_box}>
      <img className={classes.item_img} src={image} alt={name} />
      <div className={classes.item_content}>
        <span className={classes.title_box}>
          <h3 className={classes.item_title}>{name}</h3>
          <FavouriteIcon id={id} className={classes.item_icon} />
        </span>
        <StatusSign status={status} />
        <p>{species}</p>
        <Link to={`/character/${id}`} className={classes.item_link}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default Character;
