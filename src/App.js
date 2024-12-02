import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Faculty from "./pages/Faculty";
import CorporatePartner from "./pages/CorporatePartner";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";

import Carousel from "./pages/components/Carousel/Carousel";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer position="top-center" />
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/services/:course" element={<Services />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/corporate/partner" element={<CorporatePartner />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/carousel" element={<Carousel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
