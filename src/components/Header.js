import React from "react";
import { Jumbotron } from "react-bootstrap";

const Header = () => {
  return (
    <Jumbotron controls className="jumbo">
    <div className="video-main">
      <h1 className="main-headline">
        DRAGON<br></br>
        DOCKING<br></br>
        SIMULATOR
      </h1>
    <video className="video" loop="true" autoplay="autoplay" id="vid" muted>
         <source type="video/mp4" src="https://www.spacex.com/media/ISS-Docking_Simulation-15sec-03-web.mp4"></source>
         <source type="video/ogg" src="https://www.spacex.com/media/ISS-Docking_Simulation-15sec-03-web.ogg"></source>
    </video>
    </div>
    </Jumbotron>
  );
};

export default Header;
