import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [showThemeDropDown, setShowThemeDropDown] = useState(false);
  const [showAdvanceFilter, setShowAdvanceFilter] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("SYSTEM");
  return (
    <GlobalContext.Provider
      value={{
        showThemeDropDown,
        setShowThemeDropDown,
        selectedTheme,
        setSelectedTheme,
        showAdvanceFilter,
        setShowAdvanceFilter,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
