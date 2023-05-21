import React, { useState } from "react";
import Card from "../../../shared/Card";
import Button from "../../../shared/Formulaire/Button";
import { useParams } from "react-router-dom";
import "./PageCours.css";
import Utilisateur from "../../../utilisateur/components/Utilisateur";

function PageCours({ getCours, getProfesseur, ajouterEtudiantA }) {
  const coursId = useParams().coursId;
  const notreCours = getCours(coursId);
  const user = getProfesseur(notreCours.professeur);

  const [nomEtudiant, setNom] = useState("");

  const [prenomEtudiant, setPrenom] = useState("");

  const [numAdmissionEtudiant, setNumAdmission] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const notreEtudiant = {
      nom: nomEtudiant,
      prenom: prenomEtudiant,
      numAdmission: parseInt(numAdmissionEtudiant),
    };

    ajouterEtudiantA(notreEtudiant, coursId);
  };

  function saisieNom(event) {
    setNom(event.target.value);
  }

  function saisiePrenom(event) {
    setPrenom(event.target.value);
  }

  function saisieNumAdmissionEtudiant(event) {
    setNumAdmission(event.target.value);
  }

  return (
    <>
      <div className="place-item__info">
        <h2>{notreCours.titre}</h2>
        <h3>{notreCours.nbrMaxEtudiant} élèves maximum</h3>
        <p>{notreCours.discipline}</p>
        <div className="user-item">
          <Utilisateur key={user.id} utilisateur={user} getCours={getCours} />
        </div>
        <div>
          <ul>
            {notreCours.etudiants.map((etu) => (
              <li>{etu.nom + " " + etu.prenom}</li>
            ))}
          </ul>
        </div>
        <div className="place-list center">
          <form onSubmit={handleSubmit}>
            <h1 className=""> Ajouter un étudiant </h1>

            <label>
              Nom :{" "}
              <input type="text" value={nomEtudiant} onChange={saisieNom} />
            </label>
            <br />
            <label>
              Prénom :{" "}
              <input
                type="text"
                value={prenomEtudiant}
                onChange={saisiePrenom}
              />
            </label>
            <br />
            <label>
              Numéro d'admission :{" "}
              <input
                type="number"
                value={numAdmissionEtudiant}
                onChange={saisieNumAdmissionEtudiant}
              />
            </label>
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default PageCours;
