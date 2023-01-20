import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/index.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import Error from "./pages/Error";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/housing/:id" element={<Housing />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
