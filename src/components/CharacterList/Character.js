import classes from "./Character.module.css";
import { Link } from "react-router-dom";
import FavouriteIcon from "../UI/FavouriteIcon";
import StatusSign from "../UI/StatusSign";
const Character = ({ id, image, name, status, species }) => {
  return (
    <div className={classes.itemBox}>
      <img className={classes.itemImg} src={image} alt={name} />
      <div className={classes.itemContent}>
        <span className={classes.titleBox}>
          <h3 className={classes.itemTitle}>{name}</h3>
          <FavouriteIcon id={id} className={classes.itemIcon} />
        </span>
        <StatusSign status={status} />
        <p>{species}</p>
        <Link to={`/character/${id}`} className={classes.itemLink}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default Character;
