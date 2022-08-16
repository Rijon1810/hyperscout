import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./screens/Footer";
import { HomeScreen } from "./screens/HomeScreen";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
