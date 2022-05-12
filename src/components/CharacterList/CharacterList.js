import Character from "./Character";
import classes from "./CharacterList.module.css";

const CharacterList = (props) => {
  return (
    <div className={classes.character_box}>
      <ul className={classes.character_list}>
        {props.data &&
          props.data.map((item, key) => {
            return (
              <li key={key} className={classes.character_list_item}>
                <Character item={item} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CharacterList;
