import { CircularProgress } from "@mui/material";
import { Fragment, useContext, useState } from "react";
import CharacterList from "../components/CharacterList/CharacterList";
import useFetch from "../hooks/use-fetch";
import CharacterContext from "../store/character-context";
import Pagination from "../components/UI/Pagination";
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

  if (Array.isArray(data) && data.length === 0)
    return <p>Nothing to see here</p>;

  return (
    <Fragment>
      <Pagination changePage={setPage} max={maxPage} />
      {isLoading && <CircularProgress className="isLoading" />}
      {!isLoading && !isError && <CharacterList data={data} />}
      {!isLoading && isError && <InfoBox message={data.error} />}
    </Fragment>
  );
};

export default FavouriteCharacterListPage;
