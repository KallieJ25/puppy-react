import React, { useState } from 'react';
import { createPlayer } from '../API';

function NewPlayerForm() {
  const [formData, setFormData] = useState({
    name: '',
    owner: '',
    team: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    createPlayer(formData)
      .then(() => {
        // Redirect to the player list after successful creation
        window.location.href = '/';
      })
      .catch((error) => {
        console.error('Error creating player:', error);
      });
  };

  return (
    <div>
      <h1>Create New Player</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Owner:
          <input
            type="text"
            name="owner"
            value={formData.owner}
            onChange={handleChange}
          />
        </label>
        <label>
          Team:
          <input
            type="text"
            name="team"
            value={formData.team}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Create Player</button>
      </form>
    </div>
  );
}

export default NewPlayerForm;

