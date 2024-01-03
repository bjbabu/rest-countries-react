import "./App.css";
import { useState } from "react";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import CountryDetail from "./components/CountryDetail";
import { Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";

export const Context = React.createContext();

function App() {
  const [theme, setTheme] = useState({
    theme: "light-theme",
    themeBackground: "light-theme-background",
    themeInput: "light-theme-input",
  });

  return (
    <Context.Provider value={[theme, setTheme]}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Body />
            </>
          }
        ></Route>
        <Route
          path="/country/:id"
          element={
            <>
              <Header />
              <CountryDetail />
            </>
          }
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
