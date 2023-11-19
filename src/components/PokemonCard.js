// PokemonCard.js
import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [showBack, setShowBack] = useState(false);

  const toggleSprite = () => {
    setShowBack(!showBack);
  };

  return (
    <Card onClick={toggleSprite}>
      <div>
        <div className="image">
          <img
            alt={pokemon.name}
            src={showBack ? pokemon.sprites.back : pokemon.sprites.front}
          />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
