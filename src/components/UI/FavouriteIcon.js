import { useEffect, useContext, useState, Fragment } from "react";
import CharacterContext from "../../store/character-context";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import classes from "./FavouriteIcon.module.css";
const FavouriteIcon = (props) => {
  const [favouriteCharacter, setFavouriteCharacter] = useState(false);
  const ctx = useContext(CharacterContext);

  const favouriteCharacterOn = () => {
    setFavouriteCharacter(true);
    ctx.addFavouriteCharacter(props.id);
  };
  const favouriteCharacterOff = () => {
    setFavouriteCharacter(false);
    ctx.deleteFavouriteCharacter(props.id);
  };

  useEffect(() => {
    const dataInTheBegining = ctx.favouriteCharacterList.find(
      (item) => item === props.id
    );
    if (dataInTheBegining) setFavouriteCharacter(true);
  }, [ctx.favouriteCharacterList, props.id]);

  return (
    <Fragment>
      {!favouriteCharacter && (
        <AiOutlineStar
          className={classes.favourite_icon}
          onClick={favouriteCharacterOn}
        />
      )}
      {favouriteCharacter && (
        <AiFillStar
          className={classes.favourite_icon}
          onClick={favouriteCharacterOff}
        />
      )}
    </Fragment>
  );
};

export default FavouriteIcon;
