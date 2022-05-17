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
    <div className={classes.detailsBox}>
      <img src={image} alt={name} className={classes.detailsImg} />
      <div className={classes.detailsContent}>
        <div className={classes.titleBox}>
          <h3 className={classes.detailsTitle}>{name}</h3>
          <FavouriteIcon id={id} />
        </div>
        {status && (
          <StatusSign
            status={status.charAt(0).toUpperCase() + status.slice(1)}
          />
        )}
        <p>{species}</p>
        <p>{gender}</p>
        {location && <p>Last location: {location.name}</p>}
        <p>Created: {formattedDate}</p>
      </div>
    </div>
  );
};

export default CharacterDetails;
