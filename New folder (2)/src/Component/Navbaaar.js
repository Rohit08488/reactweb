import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Layout from "../Layout";
import Aboutus from "./Aboutus";
import { Contact } from "./Contact";
import { Login } from "./Loginpag";

function Navebaar() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default Navebaar;
