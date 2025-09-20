import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx"; 
import PortfolioPage from "./pages/PortfolioPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/portfolio" element={<PortfolioPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
