import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Faculty from "./pages/Faculty";
import CorporatePartner from "./pages/CorporatePartner";
import Contact from "./pages/Contact";
import CourseMap from "./pages/CourseMap";
import Category from "./pages/Category";
import Loader from "./pages/components/Loader";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";

function App() {
  return (
    <>
      <ToastContainer position="top-center" hideProgressBar />
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/services" element={<CourseMap />} />
            <Route path="/services/:course" element={<Services />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/corporate/partner" element={<CorporatePartner />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
