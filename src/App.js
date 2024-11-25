import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Faculty from "./pages/Faculty";
import CorporatePartner from "./pages/CorporatePartner";
import Contact from "./pages/Contact";
import Scrolling from "./pages/components/Scrolling";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/corporate/partner" element={<CorporatePartner />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Scrolling />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
