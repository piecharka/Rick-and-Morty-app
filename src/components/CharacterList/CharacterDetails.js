import FavouriteIcon from "../FavouriteIcon/FavouriteIcon";
import StatusSign from "../UI/StatusSign";
import classes from "./CharacterDetails.module.css";
const CharacterDetails = (props) => {
  return (
    <div className={classes.details_box}>
      <img
        src={props.data.image}
        alt={props.data.name}
        className={classes.details_img}
      />
      <div className={classes.details_content}>
        <div className={classes.title_box}>
          <h3 className={classes.details_title}>{props.data.name}</h3>
          <FavouriteIcon id={props.data.id} />
        </div>
        <StatusSign status={props.data.status} />
        <p>{props.data.species}</p>
        <p>{props.data.gender}</p>
        {props.data.location && (
          <p>Last location: {props.data.location.name}</p>
        )}
        <p>Created: {new Date(props.data.created).toDateString()}</p>
      </div>
    </div>
  );
};

export default CharacterDetails;
