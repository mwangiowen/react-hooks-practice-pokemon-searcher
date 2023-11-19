// PokemonPage.js
import React, { useState, useEffect } from "react";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import PokemonCollection from "./PokemonCollection";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch data from the JSON server when the component mounts
    fetch("http://localhost:3001/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemonData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array ensures the effect runs once on mount

  // Function to handle adding a new Pokemon
  const handleAddPokemon = (newPokemon) => {
    // Make a POST request to add the new Pokemon
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then((response) => response.json())
      .then((data) => setPokemonData([...pokemonData, data]))
      .catch((error) => console.error("Error adding Pokemon:", error));
  };

  // Function to handle search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the displayed Pokemon based on the search term
  const filteredPokemon = pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <br />
      <PokemonCollection pokemonData={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
