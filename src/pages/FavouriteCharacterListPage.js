import { Fragment, useState, useEffect, useCallback, useContext } from "react";
import CharacterList from "../components/CharacterList/CharacterList";
import CharacterContext from "../store/character-context";
const FavouriteCharacterListPage = () => {
  const [data, setData] = useState([]);
  const ctx = useContext(CharacterContext);
  const fetchData = useCallback(async () => {
    try {
      const json = await fetch(
        `https://rickandmortyapi.com/api/character/${ctx.favouriteCharacterList}`
      )
        .then((response) => response.json())
        .then((data) => data);
      console.log(json);
      setData(json);
    } catch (e) {
      console.log(e.Message);
    }
  }, [ctx.favouriteCharacterList]);

  useEffect(() => {
    if (ctx.favouriteCharacterList.length !== 0) {
      fetchData();
    }
  }, [fetchData, ctx.favouriteCharacterList]);

  return (
    <Fragment>
      <CharacterList data={data} />
    </Fragment>
  );
};

export default FavouriteCharacterListPage;
