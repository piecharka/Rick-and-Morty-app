import classes from "./Character.module.css";
const Character = (props) => {
  return (
    <div className={classes.item_box}>
      <img
        className={classes.item_img}
        src={props.item.image}
        alt={props.item.name}
      />
      <div className={classes.item_content}>
        <h3>{props.item.name}</h3>
        <p>{props.item.species}</p>
        <p>{props.item.status}</p>
        <p>{props.item.gender}</p>
      </div>
    </div>
  );
};

export default Character;
