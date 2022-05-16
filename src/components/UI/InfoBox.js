import classes from "./InfoBox.module.css";

const InfoBox = ({ message }) => {
  return (
    <div className={classes.infoBox}>
      <p className={classes.infoBoxText}>{message}</p>
    </div>
  );
};

export default InfoBox;
