import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPlayerById, deletePlayer } from '../API';

function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    // Fetch the player by ID when the component mounts
    getPlayerById(id)
      .then((response) => {
        setPlayer(response.data);
      })
      .catch((error) => {
        console.error('Error fetching player:', error);
      });
  }, [id]);

  const handleDelete = () => {
    // Implement delete logic here
    deletePlayer(id)
      .then(() => {
        // Redirect to the player list after successful deletion
        window.location.href = '/';
      })
      .catch((error) => {
        console.error('Error deleting player:', error);
      });
  };

  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{player.name}</h1>
      <p>Owner: {player.owner}</p>
      <p>Team: {player.team}</p>
      {/* Add a "Delete" button here */}
      <Link to="/">Back to All Players</Link>
    </div>
  );
}

export default SinglePlayer;
