import { CircularProgress } from "@mui/material";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import CharacterDetails from "../components/CharacterList/CharacterDetails";
import useFetch from "../hooks/use-fetch";

const CharacterDetailsPage = () => {
  const { id } = useParams();
  const [data, isLoading] = useFetch(
    `https://rickandmortyapi.com/api/character/${id}`,
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
