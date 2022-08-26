import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { GlobalContext } from "./hooks/GlobalContext";
import { Footer } from "./screens/Footer";
import { HomeScreen } from "./screens/HomeScreen";
import useDeviceDetect from "./utils/useDeviceDetect";
const App = () => {
  let isMobile = useDeviceDetect().isMobile;
  const { selectedTheme } = useContext(GlobalContext);

  useEffect(() => {
    let element = document.getElementById("root");
    if (selectedTheme === "DARK") {
      element.style.background = "#050405";
    } else {
      element.style.background = "white";
    }
  }, [selectedTheme]);
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
