import { useState, useCallback, useEffect, useContext } from "react";
import CharacterContext from "../store/character-context";
const useFetch = (url, isItFavouriteList) => {
  const [data, setData] = useState(isItFavouriteList ? [] : {});
  const [isLoading, setIsLoading] = useState(false);
  const ctx = useContext(CharacterContext);
  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const json = await fetch(url)
        .then((response) => response.json())
        .then((data) => data);
      setData(json);
      setIsLoading(false);
    } catch (e) {
      console.log(e.Message);
    }
  }, [url]);

  useEffect(() => {
    if (isItFavouriteList) {
      if (ctx.favouriteCharacterList.length !== 0) fetchData();
    } else {
      fetchData();
    }
  }, [fetchData, isItFavouriteList, ctx.favouriteCharacterList]);

  return [data, isLoading];
};

export default useFetch;
