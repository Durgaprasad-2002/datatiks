import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Faculty from "./pages/Faculty";
import CorporatePartner from "./pages/CorporatePartner";
import Contact from "./pages/Contact";
// import Scrolling from "./pages/components/Scrolling";x
import Services from "./pages/Services";
import { ToastContainer } from "react-toastify";
// import Navbar from "./pages/components/Navbar";
import "react-toastify/dist/ReactToastify.css";

// import Navb from "./pages/Navbar/SECONDNavbar";
// import ScrHome from "./pages/components/ScrHome";

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
          {/* <Route path="/test" element={<Scrolling />} /> */}
          {/* <Route path="/nav" element={<ScrHome />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
