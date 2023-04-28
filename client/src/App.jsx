import React from "react";

import ImageContextProvider from "./context/ImageContext"; // <--- import the context provider for context api

import HomePage from "./pages/HomePage/HomePage";
import AuthenticationPage from "./pages/AuthenticationPage/AuthenticationPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <ImageContextProvider>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/auth" element={<AuthenticationPage />} />
        </Routes>
      </ImageContextProvider>
    </div>
  );
};

export default App;
