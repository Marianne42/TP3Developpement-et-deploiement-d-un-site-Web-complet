import React from "react";
import logoMomo from "./logoMomo.png";
import "./Accueil.css";

function Accueil() {
  return (
    <div className="background_color">
      <header className="background_color">
      <a href="https://www.cmontmorency.qc.ca/">
        <img src={logoMomo} className="App-logo" alt="logo" />
        </a>
        <p className="text_blanc">
          <br />
          Édition 2023
          <br />
          Bienvenue sur le site des stages de fin d'études des
          techniques de l'informatique du  Collège Montmorency!
          <br />
          <br />
          À la fin de leurs études,
          les étudiants sont appelés à mettre en
          pratique les compétences acquises durant le programme.
          Cela se fait grâce à la participation d'entreprises de la
          région qui les accueillent afin de finaliser leurs
          formations.
          <br />
          <br />
          Le Collège Montmorency
          offre ainsi aux employeurs l'occasion d'obtenir une
          main-d'œuvre compétente, tout en leur permettant de
          participer à la formation finale des
          étudiants.
          <br />
          <br />
          Le stage de fin d'études
          est une expérience concrète permettant d'acquérir une
          expérience professionnelle formatrice.
          <br />
          <br />
          Les étudiants terminent
          la portion académique de leurs études en informatique
          selon une des deux voies de sortie du programme:
          Réseaux et sécurité informatique
          Développement d'applications informatiques
        </p>
      </header>
      <footer>
        
      </footer>
    </div>
  );
}

export default Accueil;