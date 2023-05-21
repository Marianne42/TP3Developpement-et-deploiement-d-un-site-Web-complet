import React from "react";
import "./ListeUtilisateurs.css";
import Utilisateur from "./Utilisateur";
import Card from "../../shared/Card";
import { useState } from "react";

function ListeUtilisateurs({ professeur, ajouterProfesseur, getCours }) {
  const [dateEmbaucheSaisie, setDateEmbauche] = useState("");
  const [nomSaisie, setNom] = useState("");
  const [prenomSaisie, setPrenom] = useState("");
  const [photoSaisie, setPhoto] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const nouveauProfesseur = {
      id: "p" + (professeur.length + 1),
      dateEmbauche: Date.parse(dateEmbaucheSaisie),
      nom: nomSaisie,
      prenom: prenomSaisie,
      photo: encodeURI(photoSaisie),
      cours: [],
    };
    ajouterProfesseur(nouveauProfesseur);
  };

  function saisieDateEmbauche(event) {
    setDateEmbauche(event.target.value);
  }

  function saisieNom(event) {
    setNom(event.target.value);
  }

  function saisiePrenom(event) {
    setPrenom(event.target.value);
  }

  function saisiePhoto(event) {
    setPhoto(event.target.value);
  }

  if (professeur.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Aucun professeur</h2>
        </Card>

        <div className="place-list center">
          <form onSubmit={handleSubmit}>
            <h1 className=""> Ajouter un Professeur </h1>

            <label>
              Date d'embauche :{" "}
              <input
                type="date"
                value={dateEmbaucheSaisie}
                onChange={saisieDateEmbauche}
              />
            </label>
            <br />
            <label>
              Nom : <input type="text" value={nomSaisie} onChange={saisieNom} />
            </label>
            <br />
            <label>
              Prénom :{" "}
              <input type="text" value={prenomSaisie} onChange={saisiePrenom} />
            </label>
            <br />
            <label>
              Photo :{" "}
              <input type="url" value={photoSaisie} onChange={saisiePhoto} />
            </label>
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {professeur.map((utilisateur) => (
        <li className="user-item">
          <Utilisateur
            key={utilisateur.id}
            utilisateur={utilisateur}
            getCours={getCours}
          />
        </li>
      ))}

      <div className="place-list center">
        <form onSubmit={handleSubmit}>
          <h1 className=""> Ajouter un Professeur </h1>

          <label>
            Date d'embauche :{" "}
            <input
              type="date"
              value={dateEmbaucheSaisie}
              onChange={saisieDateEmbauche}
            />
          </label>
          <br />
          <label>
            Nom : <input type="text" value={nomSaisie} onChange={saisieNom} />
          </label>
          <br />
          <label>
            Prénom :{" "}
            <input type="text" value={prenomSaisie} onChange={saisiePrenom} />
          </label>
          <br />
          <label>
            Photo :{" "}
            <input type="url" value={photoSaisie} onChange={saisiePhoto} />
          </label>
          <br />
          <input type="submit" />
        </form>
      </div>
    </ul>
  );
}

export default ListeUtilisateurs;
