import React, { useEffect, useState, useContext } from 'react';
import { fetchLivres } from '../services/api';
import { EmpruntContext } from '../context/EmpruntContext';

const ListLivre = () => {
  const [livres, setLivres] = useState([]);
  const { emprunterLivre } = useContext(EmpruntContext);

  useEffect(() => {
    const chargerLivres = async () => {
      const data = await fetchLivres();
      setLivres(data);
    };
    chargerLivres();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Liste des Livres</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Disponibilité</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {livres.map((livre) => (
            <tr key={livre.id}>
              <td>{livre.titre}</td>
              <td>{livre.auteur}</td>
              <td>{livre.disponible ? 'Oui' : 'Non'}</td>
              <td>
                {livre.disponible && (
                  <button
                    className="btn btn-primary"
                    onClick={() => emprunterLivre(livre.id, livre.titre, livre.auteur)}
                  >
                    Emprunter
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListLivre;
