import React from "react";
import { Card } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <Card className="movieCard" bg="light">
      <Card.Img variant="top" src={movie.img}></Card.Img>
      <Card.Body>
        <Card.Title className="card-title">{movie.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {movie.director}
        </Card.Subtitle>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Link href={movie.link} target="_blank" rel="noopener noreferrer" className="link">
        check it out
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
