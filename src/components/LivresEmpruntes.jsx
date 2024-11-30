import React, { useContext } from 'react';
import { EmpruntContext } from '../context/EmpruntContext';

const LivresEmpruntes = () => {
  const { emprunts, rendreLivre } = useContext(EmpruntContext);

  return (
    <div className="container mt-4">
      <h2>Livres Empruntés</h2>
      {emprunts.length === 0 ? (
        <p>Aucun livre emprunté pour le moment.</p>
      ) : (
        <ul className="list-group">
          {emprunts.map((emprunt,id) => (
            <li key={id} className="list-group-item d-flex justify-content-between align-items-center">
              TITRE: {emprunt.titre} - AUTEUR: {emprunt.auteur}
              
              <button className="btn btn-danger btn-sm" onClick={() => rendreLivre(id)}>
                Rendre
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LivresEmpruntes;
