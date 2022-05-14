import { CircularProgress } from "@mui/material";
import { Fragment, useContext } from "react";
import CharacterDetails from "../components/CharacterList/CharacterDetails";
import useFetch from "../components/hooks/use-fetch";
import CharacterContext from "../store/character-context";

const CharacterDetailsPage = () => {
  const ctx = useContext(CharacterContext);
  const [data, isLoading] = useFetch(
    `https://rickandmortyapi.com/api/character/${ctx.characterDetailsId}`,
    false
  );

  return (
    <Fragment>
      {isLoading && <CircularProgress className="isLoading" />}
      {!isLoading && <CharacterDetails data={data} />}
    </Fragment>
  );
};

export default CharacterDetailsPage;
