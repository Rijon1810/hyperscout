import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./screens/Footer";
import { HomeScreen } from "./screens/HomeScreen";
import useDeviceDetect from "./utils/useDeviceDetect";
const App = () => {
  let isMobile = useDeviceDetect().isMobile;
  return (
    <BrowserRouter>
      <Header isMobile={isMobile} />
      <Routes>
        <Route path="/" element={<HomeScreen isMobile={isMobile} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
