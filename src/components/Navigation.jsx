import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navigation = ({ id }) => {
  const navigate = useNavigate();
  const [pokemonId, setPokemonId] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      if (!isNaN(id)) {
        setPokemonId(parseInt(id));
      } else {
        try {
          const res = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${id}`
          );
          setPokemonId(res.data.id);
        } catch (error) {
          console.error("Invalid Pokémon name:", error);
        }
      }
    };

    fetchPokemon();
  }, [id]);

  const handlePrev = () => {
    if (pokemonId > 1) {
      navigate(`/pokemon/${pokemonId - 1}`);
    }
  };

  const handleNext = () => {
    navigate(`/pokemon/${pokemonId + 1}`);
  };

  return (
    <div className="button-group d-flex justify-content-between mt-4">
      <button
        onClick={handlePrev}
        disabled={!pokemonId || pokemonId <= 1}
        style={{ background: "#3498db", color: "white" }}
      >
        ⬅️ Previous
      </button>

      <button
        onClick={handleNext}
        disabled={!pokemonId}
        style={{ background: "#3498db", color: "white" }}
      >
        Next ➡️
      </button>
    </div>
  );
};

export default Navigation;
