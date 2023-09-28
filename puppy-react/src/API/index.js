import axios from 'axios';

const API_BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/'; // Replace with your API URL

// Fetch all players
export const getAllPlayers = () => {
  return axios.get(`${API_BASE_URL}/players`);
};

// Fetch a single player by ID
export const getPlayerById = (playerId) => {
  return axios.get(`${API_BASE_URL}/players/${playerId}`);
};

// Create a new player
export const createPlayer = (playerData) => {
  return axios.post(`${API_BASE_URL}/players`, playerData);
};

// Delete a player by ID
export const deletePlayer = (playerId) => {
  return axios.delete(`${API_BASE_URL}/players/${playerId}`);
};
