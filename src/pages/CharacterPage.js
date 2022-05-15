import { CircularProgress } from "@mui/material";
import { Fragment } from "react";
import CharacterList from "../components/CharacterList/CharacterList";
import useFetch from "../hooks/use-fetch";

const CharacterPage = () => {
  const [data, isLoading] = useFetch(
    "https://rickandmortyapi.com/api/character/?page=1",
    false
  );

  return (
    <Fragment>
      {isLoading && <CircularProgress className="isLoading" />}
      {!isLoading && <CharacterList data={data.results} />}
    </Fragment>
  );
};

export default CharacterPage;
