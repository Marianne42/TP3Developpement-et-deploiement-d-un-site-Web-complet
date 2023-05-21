import React from "react";
import Card from "../../../shared/Card";
import Button from "../../../shared/Formulaire/Button";
import "./CoursBasique.css";

function CoursBasique({ place }) {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__info">
          <h2 > {place.titre}</h2>
          <h3 >{place.nbrMaxEtudiant} élèves maximum</h3>
          <p >{place.discipline}</p>
        </div>
        <div className="place-item__actions">
          <Button to={`/cours/${place.id}`}> Voir le cours </Button>
          <Button to={`/professeurs`}> Voir enseignants </Button>
        </div>
      </Card>
    </li>
  );
}

export default CoursBasique;
