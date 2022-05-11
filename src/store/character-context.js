import React from "react";
const CharacterContext = React.createContext({});

export const CharacterContextProvider = (props) => {
  const contextValue = {};

  return (
    <CharacterContext.Provider value={contextValue}>
      {props.children}
    </CharacterContext.Provider>
  );
};

export default CharacterContext;
