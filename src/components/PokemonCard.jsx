// src/components/PokemonCard.jsx
import React from "react";
import { Card, Badge, ListGroup } from "react-bootstrap";

const PokemonCard = ({ pokemon }) => {
  return (
    <Card className="text-center shadow-lg">
      <Card.Img
        variant="top"
        src={pokemon.sprites?.front_default}
        alt={pokemon.name}
        style={{ width: "200px", margin: "20px auto" }}
      />
      <Card.Body>
        <Card.Title className="text-capitalize">{pokemon.name}</Card.Title>
        <div>
          {pokemon.types?.map((type) => (
            <Badge key={type.slot} className="me-2">
              {type.type.name}
            </Badge>
          ))}
        </div>
        <ListGroup className="mt-3">
          {pokemon.stats?.map((stat) => (
            <ListGroup.Item key={stat.stat.name}>
              <strong>{stat.stat.name.toUpperCase()}:</strong> {stat.base_stat}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
