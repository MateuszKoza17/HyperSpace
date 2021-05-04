import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import { movies } from "../data";

const IntroHead = () => {
  return (
    <Jumbotron fluid>
    <h1>Hyper Space</h1>
    <p className="intro-paragraph">
    A Fuller World Of Science
    </p>
</Jumbotron>
  );
};

export default IntroHead;
