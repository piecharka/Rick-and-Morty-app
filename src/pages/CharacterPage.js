import { CircularProgress } from "@mui/material";
import { Fragment, useState } from "react";
import CharacterList from "../components/CharacterList/CharacterList";
import InfoBox from "../components/UI/InfoBox";
import Pagination from "../components/UI/Pagination";
import useFetch from "../hooks/use-fetch";

const CharacterPage = () => {
  const [page, setPage] = useState(1);
  const [data, isLoading, isError] = useFetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`,
    false
  );

  return (
    <Fragment>
      <Pagination changePage={setPage} max={data?.info?.pages} />
      {isLoading && <CircularProgress className="isLoading" />}
      {!isLoading && !isError && <CharacterList data={data.results} />}
      {!isLoading && isError && <InfoBox message={data.error} />}
    </Fragment>
  );
};

export default CharacterPage;
