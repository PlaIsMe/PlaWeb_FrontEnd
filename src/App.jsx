import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./sections/Home.jsx"; 
import PortfolioPage from "./pages/PortfolioPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/portfolio" element={<PortfolioPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
