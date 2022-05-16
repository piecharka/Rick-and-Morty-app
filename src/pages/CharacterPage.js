import { CircularProgress } from "@mui/material";
import { Fragment, useState } from "react";
import CharacterList from "../components/CharacterList/CharacterList";
import Pagination from "../components/UI/Pagination";
import useFetch from "../hooks/use-fetch";

const CharacterPage = () => {
  const [page, setPage] = useState(1);
  const [data, isLoading] = useFetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`,
    false
  );

  return (
    <Fragment>
      <Pagination changePage={setPage} />
      {isLoading && <CircularProgress className="isLoading" />}
      {!isLoading && <CharacterList data={data.results} />}
    </Fragment>
  );
};

export default CharacterPage;
