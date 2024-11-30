import React from 'react';
import ListLivre from './components/ListLivre';
import LivresEmpruntes from './components/LivresEmpruntes';
import Message from './components/Message';
import { EmpruntProvider } from './context/EmpruntContext';

const App = () => {
  return (
    <EmpruntProvider>
      <div className="container mt-5">
        <h1>Gestion des Emprunts - Bibliothèque</h1>
        <Message /> {/* Composant pour afficher les messages */}
        <ListLivre />
        <LivresEmpruntes />
      </div>
    </EmpruntProvider>
  );
};

export default App;
