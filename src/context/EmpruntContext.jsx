import React, { createContext, useState } from 'react';

export const EmpruntContext = createContext();

export const EmpruntProvider = ({ children }) => {
  const [emprunts, setEmprunts] = useState([]);
  const [message, setMessage] = useState(null); // État pour le message

  const emprunterLivre = (id, titre, auteur) => {
    if (!emprunts.includes(id)) {
      setEmprunts((prevEmprunts) => [...prevEmprunts, {id:id, titre:titre, auteur:auteur}]);
      setMessage({ type: 'success', text: 'Livre emprunté avec succès !' });
    } else {
      setMessage({ type: 'error', text: 'Ce livre est déjà emprunté.' });
    }
  };

  const rendreLivre = (id) => {
    if (emprunts.includes(id)) {
      setEmprunts((prevEmprunts) => prevEmprunts.filter((livreId) => livreId !== id));
      setMessage({ type: 'success', text: 'Livre rendu avec succès !' });
    } else {
      setMessage({ type: 'error', text: 'Ce livre n’est pas dans la liste des emprunts.' });
    }
  };

  return (
    <EmpruntContext.Provider value={{ emprunts, emprunterLivre, rendreLivre, message, setMessage }}>
      {children}
    </EmpruntContext.Provider>
  );
};
