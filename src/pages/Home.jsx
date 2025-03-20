import React from 'react';
import SearchBar from '../components/SearchBar';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center">Pokémon Info App</h1>
      <SearchBar />
    </Container>
  );
};

export default Home;
