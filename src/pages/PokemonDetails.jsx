import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Spinner, Alert } from 'react-bootstrap';
import PokemonCard from '../components/PokemonCard';
import Navigation from '../components/Navigation';

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(res.data);
        setLoading(false);
      } catch (err) {
        setError('Pokémon not found');
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container className="mt-5">
      <Navigation id={id} />
      <PokemonCard pokemon={pokemon} />
    </Container>
  );
};

export default PokemonDetails;
