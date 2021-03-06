import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/UI/Navigation";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import CharacterPage from "./pages/CharacterPage";
import FavouriteCharacterListPage from "./pages/FavouriteCharacterListPage";
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to={"/characters"} />} />
        <Route path="/characters" element={<CharacterPage />} />
        <Route
          path="/favourite-characters"
          element={<FavouriteCharacterListPage />}
        />
        <Route path="/character/:id" element={<CharacterDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
