// src/services/api.js
import axios from 'axios';

// URL de l'API
const API_URL = 'https://gahi-said.com/apis/auteurs.php';

// Fonction pour récupérer la liste des livres
export const fetchLivres = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;  // Retourne les livres sous forme de tableau
  } catch (error) {
    console.error('Erreur lors de la récupération des livres:', error);
    return []; // En cas d'erreur, retourne un tableau vide
  }
};
