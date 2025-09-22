import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx"; 
import PortfolioPage from "./pages/PortfolioPage.jsx";
import AnnoyingVillagersModPage from "./pages/AnnoyingVillagersModPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/*" element={<HomePage />} />

      <Route path="/portfolio" element={<PortfolioPage />} />

      <Route path="/annoyingvillagers" element={<AnnoyingVillagersModPage />} />
    </Routes>
  );
}

export default App