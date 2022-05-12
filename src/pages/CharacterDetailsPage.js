import { Fragment, useCallback, useContext, useEffect, useState } from "react";
import CharacterDetails from "../components/CharacterList/CharacterDetails";
import CharacterContext from "../store/character-context";
const CharacterDetailsPage = () => {
  const [data, setData] = useState({});
  const ctx = useContext(CharacterContext);
  const fetchData = useCallback(async () => {
    try {
      const json = await fetch(
        `https://rickandmortyapi.com/api/character/${ctx.characterDetailsId}`
      )
        .then((response) => response.json())
        .then((data) => data);
      console.log(json);
      setData(json);
    } catch (e) {
      console.log(e.Message);
    }
  }, [ctx.characterDetailsId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Fragment>
      <CharacterDetails data={data} />
    </Fragment>
  );
};

export default CharacterDetailsPage;
