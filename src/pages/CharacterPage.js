import { Fragment, useCallback, useEffect, useState } from "react";
import CharacterList from "../components/CharacterList/CharacterList";

const CharacterPage = () => {
  const [data, setData] = useState([]);
  const fetchData = useCallback(async () => {
    try {
      const json = await fetch(
        "https://rickandmortyapi.com/api/character/?page=1"
      )
        .then((response) => response.json())
        .then((data) => data);
      console.log(json);
      setData(json);
    } catch (e) {
      console.log(e.Message);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Fragment>
      <CharacterList data={data.results} />
    </Fragment>
  );
};

export default CharacterPage;
