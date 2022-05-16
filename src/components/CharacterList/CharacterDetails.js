import FavouriteIcon from "../UI/FavouriteIcon";
import StatusSign from "../UI/StatusSign";
import classes from "./CharacterDetails.module.css";
const CharacterDetails = ({
  id,
  image,
  name,
  created,
  status,
  species,
  gender,
  location,
}) => {
  const formattedDate = new Date(created).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <div className={classes.details_box}>
      <img src={image} alt={name} className={classes.details_img} />
      <div className={classes.details_content}>
        <div className={classes.title_box}>
          <h3 className={classes.details_title}>{name}</h3>
          <FavouriteIcon id={id} />
        </div>
        <StatusSign status={status} />
        <p>{species}</p>
        <p>{gender}</p>
        {location && <p>Last location: {location.name}</p>}
        <p>Created: {formattedDate}</p>
      </div>
    </div>
  );
};

export default CharacterDetails;
