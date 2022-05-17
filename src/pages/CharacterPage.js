import { CircularProgress } from "@mui/material";
import { Fragment, useState } from "react";
import CharacterList from "../components/CharacterList/CharacterList";
import InfoBox from "../components/UI/InfoBox";
//import Pagination from "../components/UI/Pagination";
import { Pagination } from "@mui/material";
import useFetch from "../hooks/use-fetch";

const CharacterPage = () => {
  const [page, setPage] = useState(1);
  const [data, isLoading, isError] = useFetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`,
    false
  );
  const pageHandler = (e, val) => {
    setPage(val);
  };

  return (
    <Fragment>
      {!isLoading && !isError && (
        <Pagination
          count={data?.info?.pages}
          onChange={pageHandler}
          size="large"
          page={page}
          className="pagination"
        />
      )}
      {isLoading && <CircularProgress className="isLoading" />}
      {!isLoading && !isError && <CharacterList data={data.results} />}
      {!isLoading && isError && <InfoBox message={data.error} />}
      {!isLoading && !isError && (
        <Pagination
          count={data?.info?.pages}
          onChange={pageHandler}
          size="large"
          page={page}
          className="pagination"
        />
      )}
    </Fragment>
  );
};

export default CharacterPage;
