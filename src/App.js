import { Routes, Route } from "react-router-dom";
import CharacterPage from "./pages/CharacterPage";
import FavouriteCharacterList from "./pages/FavouriteCharacterList";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/charakters" element={<CharacterPage />} />
        <Route
          path="/favourite-charakters"
          element={<FavouriteCharacterList />}
        />
      </Routes>
    </div>
  );
}

export default App;
