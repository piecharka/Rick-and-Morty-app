import { CircularProgress } from "@mui/material";
import { Fragment, useContext, useState } from "react";
import CharacterList from "../components/CharacterList/CharacterList";
import useFetch from "../hooks/use-fetch";
import CharacterContext from "../store/character-context";
// import Pagination from "../components/UI/Pagination";
import { Pagination } from "@mui/material";
import InfoBox from "../components/UI/InfoBox";

const CHUNK_SIZE = 20;
const FavouriteCharacterListPage = () => {
  const ctx = useContext(CharacterContext);
  const [page, setPage] = useState(1);
  const characterList = ctx.favouriteCharacterList.slice(
    (page - 1) * CHUNK_SIZE,
    page * CHUNK_SIZE
  );
  const maxPage = Math.ceil(ctx.favouriteCharacterList.length / CHUNK_SIZE);

  const [data, isLoading, isError] = useFetch(
    `https://rickandmortyapi.com/api/character/${characterList}?page=${page}`,
    { skip: ctx.favouriteCharacterList.length === 0 }
  );

  const pageHandler = (e, val) => {
    setPage(val);
  };

  if (Array.isArray(data) && data.length === 0)
    return <InfoBox message="Nothing to see here" />;
  else
    return (
      <Fragment>
        {!isLoading && !isError && (
          <Pagination
            onChange={pageHandler}
            count={maxPage}
            page={page}
            size="large"
            className="pagination"
          />
        )}
        {isLoading && <CircularProgress className="isLoading" />}
        {!isLoading && !isError && <CharacterList data={data} />}
        {!isLoading && isError && <InfoBox message={data.error} />}
        {!isLoading && !isError && (
          <Pagination
            onChange={pageHandler}
            count={maxPage}
            page={page}
            size="large"
            className="pagination"
          />
        )}
      </Fragment>
    );
};

export default FavouriteCharacterListPage;
