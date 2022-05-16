import { CircularProgress } from "@mui/material";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import CharacterDetails from "../components/CharacterList/CharacterDetails";
import InfoBox from "../components/UI/InfoBox";
import useFetch from "../hooks/use-fetch";

const CharacterDetailsPage = () => {
  const { id } = useParams();
  const [data, isLoading, isError] = useFetch(
    `https://rickandmortyapi.com/api/character/${id}`,
    false
  );

  return (
    <Fragment>
      {isLoading && <CircularProgress className="isLoading" />}
      {!isLoading && !isError && (
        <CharacterDetails
          id={data.id}
          image={data.image}
          name={data.name}
          created={data.created}
          status={data.status}
          species={data.species}
          gender={data.gender}
          location={data.location}
        />
      )}
      {!isLoading && isError && <InfoBox message={data.error} />}
    </Fragment>
  );
};

export default CharacterDetailsPage;
