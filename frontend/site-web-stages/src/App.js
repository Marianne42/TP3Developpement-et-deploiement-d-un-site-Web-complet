import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Utilisateurs from "./utilisateur/pages/Utilisateurs";
import MainNavigation from "./shared/Navigation/MainNavigation";
import Cours from "./places/pages/Cours";
import PageCours from "./places/pages/components/PageCours";
import Accueil from "./Accueil";
import { useState } from "react";
import "./Accueil.css";
import Deroulement from "./Deroulement";
import FAQ from "./FAQ";
import ProfileMore from "./ProfileMore";
import FormulaireEmployeur from "./FormulaireEmployeur";


export var COURS;
export var set_COURS;
export var setProfesseurs;
export var professeurs;

function App() {
  [COURS, set_COURS] = useState([
    {
      id: "c1",
      titre: "Cours de Programmation",
      discipline: "Le cours qui apprend à faire du code",
      nbrMaxEtudiant: 30,
      dateDebut: new Date("2023-01-01"),
      dateFin: new Date("2023-06-06"),
      professeur: "p1",
      etudiants: [],
    },
    {
      id: "c3",
      titre: "Cours de Design",
      discipline: "Le cours qui apprend à faire du je sais pas quoi",
      nbrMaxEtudiant: 30,
      dateDebut: new Date("2023-01-01"),
      dateFin: new Date("2023-06-06"),
      professeur: "p1",
      etudiants: [],
    },
    {
      id: "c2",
      titre: "Toilettage de chat",
      discipline: "Cours pour apprendre à toiletter son chat trop pipou",
      nbrMaxEtudiant: 30,
      dateDebut: new Date("2022-08-01"),
      dateFin: new Date("2022-12-31"),
      professeur: "p2",
      etudiants: [],
    },
    {
      id: "c4",
      titre: "Cours de Guérilande",
      discipline:
        "Le cours qui apprend à jouer un deck Guérilande Voodoo Zone perdu",
      nbrMaxEtudiant: 30,
      dateDebut: new Date("2022-01-02"),
      dateFin: new Date("2022-06-05"),
      professeur: "p3",
      etudiants: [],
    },
    {
      id: "c5",
      titre: "Cours de sortilèges niveau 1",
      discipline:
        "Apprenez dans ce cours les sorts de base comme Levioso ou Imperio",
      nbrMaxEtudiant: 20,
      dateDebut: new Date("2021-09-01"),
      dateFin: new Date("2021-11-15"),
      professeur: "p2",
      etudiants: [],
    },
    {
      id: "c6",
      titre: "Apprendre le langage des Pokémons",
      discipline: "Attrapez les tous au passage",
      nbrMaxEtudiant: 5,
      dateDebut: new Date("2022-08-01"),
      dateFin: new Date("2022-12-31"),
      professeur: "p3",
      etudiants: [],
    },
  ]);

  [professeurs, setProfesseurs] = useState([
    {
      id: "p1",
      prenom: "Sylvain",
      nom: "Labranche",
      dateEmbauche: new Date("2001-11-28"),
      image:
        "https://www.chumontreal.qc.ca/sites/default/files/guy-pare_5.jpeg",
      cours: ["c1", "c3"],
    },
    {
      id: "p2",
      prenom: "blanc",
      nom: "Chat",
      dateEmbauche: new Date("2015-02-31"),
      image:
        "https://imgs.search.brave.com/8geawRwEFS-pveoR54T_jcAoclS3C85q9KnyuKyquz0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dGhlc3BydWNlcGV0/cy5jb20vdGhtYi9o/SjQwaGRwSzRLWjVB/ZWhsTW1WRWRKcjh6/UEk9LzE5OTl4MTQ1/OS9maWx0ZXJzOmZp/bGwoYXV0bywxKS90/d2VudHkyMF9lNDdi/Mzc5OC1kZDliLTQw/YjEtOTFlZi0xZDgy/MDMzNzk2NmUtNWFh/M2Y3OTg2NDJkY2Ew/MDM2M2IwZGYxLmpw/Zw",
      cours: ["c2", "c5"],
    },
    {
      id: "p3",
      prenom: "Guérilande",
      nom: "De Voodoo",
      dateEmbauche: new Date("2019-01-01"),
      image:
        "http://pa1.narvii.com/7091/f72a3b4f989e6ac4dba12495cb4a3799e5a830d6r1-150-150_00.gif",
      cours: ["c4", "c6"],
    },
  ]);

  function ajouterProfesseur(nouveauProfesseur) {
    setProfesseurs(professeurs.concat(nouveauProfesseur));
    console.log(professeurs);
  }

  function ajouterCours(nouveauCours) {
    set_COURS(COURS.concat(nouveauCours));
    getProfesseur(nouveauCours.professeur).cours.push(nouveauCours.id);
    console.log(COURS);
  }

  function getProfesseur(userId) {
    return professeurs.filter((user) => user.id === userId)[0];
  }

  function getCours(coursId) {
    return COURS.filter((cours) => cours.id === coursId)[0];
  }

  function ajouterEtudiantA(etudiant, coursId) {
    getCours(coursId).etudiants.push(etudiant);
  }

  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Accueil />
          </Route>
          <Route path="/professeurs" exact>
            <Utilisateurs
              //professeur={professeurs}
              //ajouterProfesseur={ajouterProfesseur}
              //getCours={getCours}
            />
          </Route>
          <Route path="/session/:numsession" exact>
            <Cours
              //cours={COURS}
              //ajouterCours={ajouterCours}
              //professeur={professeurs}
            />
          </Route>
          <Route path="/cours/:coursId" exact>
            <PageCours
              //getCours={getCours}
              //getProfesseur={getProfesseur}
              //ajouterEtudiantA={ajouterEtudiantA}
            />
          </Route>
          <Route path="/Deroulements" exact>
            <Deroulement
              
            />
          </Route>
          <Route path="/FAQ" exact>
            <FAQ
              
            />
          </Route>
          <Route path="/Profile" exact>
            <ProfileMore
              
            />
          </Route>
          
          <Route path="/FormulaireEmployeur" exact>
            <FormulaireEmployeur
              
            />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
