import { PROPERTY_TYPES } from "@babel/types";
import Card from "../../../shared/Card";
import React from "react";
import CoursBasique from "./CoursBasique";
import "./ListeCours.css";
import Button from "../../../shared/Formulaire/Button";
import { useParams } from "react-router-dom";
import Cours from "../Cours";
import { useState } from "react";

function ListeCours({ cours, ajouterCours, nbCours, professeur }) {
  const [titreSaisie, setTitre] = useState("");
  const [disciplineSaisie, setDiscipline] = useState("");
  const [nbrMaxEtudiantSaisie, setNbrMaxEtudiant] = useState("");
  const [dateDebutSaisie, setDateDebut] = useState("");
  const [dateFinSaisie, setDateFin] = useState("");

  const [professeurSaisie, setProfesseur] = useState("p1");

  const handleSubmit = (event) => {
    event.preventDefault();
    const nouveauCours = {
      id: "c" + (nbCours + 1),
      titre: titreSaisie,
      discipline: disciplineSaisie,
      nbrMaxEtudiant: parseInt(nbrMaxEtudiantSaisie),
      dateDebut: Date.parse(dateDebutSaisie),
      dateFin: Date.parse(dateFinSaisie),
      professeur: professeurSaisie,
      etudiants: [],
    };

    ajouterCours(nouveauCours);
  };

  function saisieProfesseur(event) {
    setProfesseur(event.target.value);
  }
  function saisieTitre(event) {
    setTitre(event.target.value);
  }

  function saisieDiscipline(event) {
    setDiscipline(event.target.value);
  }

  function saisieNbrEleves(event) {
    setNbrMaxEtudiant(event.target.value);
  }

  function saisieDateDebut(event) {
    setDateDebut(event.target.value);
  }

  function saisieDateFin(event) {
    setDateFin(event.target.value);
  }

  var numSession = parseInt(useParams().numsession);
  if (cours.length === 0)
    return (
      <div>
        <div className="place-list center">
          <Card>
            <h2> Pas de cours trouvées :</h2>
          </Card>
        </div>
        <div className="button-center">
          <Button to={`/session/${Math.min(numSession + 1, 4)}`}>
            {" "}
            Session Précedente{" "}
          </Button>
          <Button to={`/session/${Math.max(numSession - 1, 0)}`}>
            {" "}
            Session Suivante{" "}
          </Button>
        </div>
        <div className="place-list center">
          <form onSubmit={handleSubmit}>
            <h1 className=""> Ajouter un cours </h1>

            <label>
              Titre :{" "}
              <input type="text" value={titreSaisie} onChange={saisieTitre} />
            </label>
            <br />
            <label>
              Discipline :{" "}
              <input
                type="text"
                value={disciplineSaisie}
                onChange={saisieDiscipline}
              />
            </label>
            <br />
            <label>
              Nombre maximal d'élèves :{" "}
              <input
                type="number"
                value={nbrMaxEtudiantSaisie}
                onChange={saisieNbrEleves}
              />
            </label>
            <br />
            <label>
              Date de début :{" "}
              <input
                type="date"
                value={dateDebutSaisie}
                onChange={saisieDateDebut}
              />
            </label>
            <br />
            <label>
              Date de fin :{" "}
              <input
                type="date"
                value={dateFinSaisie}
                onChange={saisieDateFin}
              />
            </label>
            <br />
            <select value={professeurSaisie} onChange={saisieProfesseur}>
              {professeur.map((prof) => (
                <option value={prof.id}>{prof.nom + " " + prof.prenom}</option>
              ))}
            </select>
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    );

  return (
    <div>
      <ul className="place-list">
        {cours.map((place) => (
          <CoursBasique key={place.id} place={place} />
        ))}
      </ul>
      <div className="button-center">
        <Button to={`/session/${Math.min(numSession + 1, 4)}`}>
          {" "}
          Session Precedente{" "}
        </Button>
        <Button to={`/session/${Math.max(numSession - 1, 0)}`}>
          {" "}
          Session Suivante{" "}
        </Button>

        <div className="place-list center">
          <form onSubmit={handleSubmit}>
            <h1 className=""> Ajouter un cours </h1>

            <label>
              Titre :{" "}
              <input type="text" value={titreSaisie} onChange={saisieTitre} />
            </label>
            <br />
            <label>
              Discipline :{" "}
              <input
                type="text"
                value={disciplineSaisie}
                onChange={saisieDiscipline}
              />
            </label>
            <br />
            <label>
              Nombre maximal d'élèves :{" "}
              <input
                type="number"
                value={nbrMaxEtudiantSaisie}
                onChange={saisieNbrEleves}
              />
            </label>
            <br />
            <label>
              Date de début :{" "}
              <input
                type="date"
                value={dateDebutSaisie}
                onChange={saisieDateDebut}
              />
            </label>
            <br />
            <label>
              Date de fin :{" "}
              <input
                type="date"
                value={dateFinSaisie}
                onChange={saisieDateFin}
              />
            </label>
            <br />
            <select value={professeurSaisie} onChange={saisieProfesseur}>
              {professeur.map((prof) => (
                <option value={prof.id}>{prof.nom + " " + prof.prenom}</option>
              ))}
            </select>
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
/*<select>
{professeur.map((prof) => (<option value={prof.id}>{prof.nom}+{" "}+{prof.prenom}</option>))}
</select>*/

export default ListeCours;
