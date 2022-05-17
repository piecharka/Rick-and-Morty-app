import Character from "./Character";
import classes from "./CharacterList.module.css";

const CharacterList = (props) => {
  // If only 1 favourite is present, API returns object instead of Array
  const characters = props && props.data && [props.data].flat();

  return (
    <div className={classes.characterBox}>
      <ul className={classes.characterList}>
        {characters &&
          characters.map((item, key) => {
            return (
              <li key={key}>
                <Character
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  status={
                    item.status.charAt(0).toUpperCase() + item.status.slice(1)
                  }
                  species={item.species}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CharacterList;
