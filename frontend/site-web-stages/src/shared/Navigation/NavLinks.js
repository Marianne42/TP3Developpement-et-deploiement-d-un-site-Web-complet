import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

function NavLinks(props) {
  return <ul className="nav-links">
    <li>
      <NavLink to="/" exact>Accueil</NavLink>
    </li>
    <li>
      <NavLink to="/professeurs" exact>Stages</NavLink>
    </li>
    <li>
      <NavLink to="/session/0">Etudiants</NavLink>
    </li>
    <li>
      <NavLink to="/Deroulements">Deroulement</NavLink>
    </li>
    <li>
      <NavLink to="/FAQ">FAQ</NavLink>
    </li>
    <li>
      <NavLink to="/Profile">Profile</NavLink>
    </li>
    <li>
      <NavLink to="/FormulaireEmployeur">Formulaire des Employeurs</NavLink>
    </li>
  </ul>
};

export default NavLinks;