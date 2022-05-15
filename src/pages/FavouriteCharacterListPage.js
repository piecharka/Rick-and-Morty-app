import { CircularProgress } from "@mui/material";
import { Fragment, useContext } from "react";
import CharacterList from "../components/CharacterList/CharacterList";
import useFetch from "../hooks/use-fetch";
import CharacterContext from "../store/character-context";
const FavouriteCharacterListPage = () => {
  const ctx = useContext(CharacterContext);
  const [data, isLoading] = useFetch(
    `https://rickandmortyapi.com/api/character/${ctx.favouriteCharacterList}`,
    true
  );

  return (
    <Fragment>
      {isLoading && <CircularProgress className="isLoading" />}
      {!isLoading && <CharacterList data={data} />}
    </Fragment>
  );
};

export default FavouriteCharacterListPage;
