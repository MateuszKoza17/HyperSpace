import React, { useState } from "react";
import Main from "./components/Main";
import Intro from "./components/Intro";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";

const App = () => {
  const [filmFilter, setFilmFilter] = useState(null);

  const userSearch = (data) => {
    setFilmFilter(data);
  };

  return (
    <>
      <Intro />
      <Main />
      <Header />
      <SearchBar userSearch={userSearch} />
      <Catalog filter={filmFilter} />
      <Footer />
    </>
  );
};

export default App;

// npm install -g firebase-tools
