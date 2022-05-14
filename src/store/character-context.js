import React, { useState, useEffect } from "react";
const CharacterContext = React.createContext({
  characterDetailsId: 0,
  favouriteCharacterList: [],
  addFavouriteCharacter: (id) => {},
  deleteFavouriteCharacter: (id) => {},
  setCharacterDetailsId: () => {},
});

export const CharacterContextProvider = (props) => {
  const [detailsId, setDetailsId] = useState(0);
  const [favouriteList, setFavouriteList] = useState([]);

  useEffect(() => {
    //on beginning
    const favouriteItemList = JSON.parse(
      localStorage.getItem("FavouriteCharacterList")
    );

    if (favouriteItemList.length !== 0) {
      setFavouriteList(favouriteItemList);
    }
  }, []);

  useEffect(() => {
    //on update
    localStorage.setItem(
      "FavouriteCharacterList",
      JSON.stringify(favouriteList)
    );
  }, [favouriteList]);

  const addFavouriteCharacterHandler = (id) => {
    setFavouriteList((prevList) => {
      const copy = prevList.find((element) => element === id);
      if (copy) return;
      return [...prevList, id];
    });
  };
  const deleteFavouriteCharacterHandler = (id) => {
    setFavouriteList((prevList) => {
      return prevList.filter((item) => item !== id);
    });
  };

  const contextValue = {
    characterDetailsId: detailsId,
    favouriteCharacterList: favouriteList,
    addFavouriteCharacter: addFavouriteCharacterHandler,
    deleteFavouriteCharacter: deleteFavouriteCharacterHandler,
    setCharacterDetailsId: setDetailsId,
  };

  return (
    <CharacterContext.Provider value={contextValue}>
      {props.children}
    </CharacterContext.Provider>
  );
};

export default CharacterContext;
