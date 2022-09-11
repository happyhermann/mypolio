import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "./Home";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Router;
