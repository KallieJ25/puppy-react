import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPlayers } from '../API';

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Fetch all players when the component mounts
    getAllPlayers()
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching players:', error);
      });
  }, []);

  // Filter players based on the search text
  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h1>All Players</h1>
      <input
        type="text"
        placeholder="Search players..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <ul>
        {filteredPlayers.map((player) => (
          <li key={player.id}>
            <Link to={`/players/${player.id}`}>
              {player.name} - {player.team}
            </Link>
            {/* Add "See Details" button here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllPlayers;
