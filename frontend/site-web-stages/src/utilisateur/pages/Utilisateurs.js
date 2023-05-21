import React from "react";
import ListeUtilisateurs from "../components/ListeUtilisateurs";

function Utilisateurs({ professeur, ajouterProfesseur, getCours }) {
  return (
    <ListeUtilisateurs
      professeur={professeur}
      ajouterProfesseur={ajouterProfesseur}
      getCours={getCours}
    />
  );
}

export default Utilisateurs;
