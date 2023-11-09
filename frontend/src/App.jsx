import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Rent from "./pages/rent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="rent" element={<Rent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
