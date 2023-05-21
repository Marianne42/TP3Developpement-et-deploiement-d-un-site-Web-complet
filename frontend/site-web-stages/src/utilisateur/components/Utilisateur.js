import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/Avatar";
import Card from "../../shared/Card";

import "./Utilisateur.css";

function Utilisateur({ utilisateur, getCours }) {
  return (
    <Card className="user-item__content">
      <div className="user-item__image">
        <Avatar image={utilisateur.image} alt={utilisateur.nom} />
      </div>

      <div className="user-item__info">
        <h2>
          {utilisateur.nom} {utilisateur.prenom}{" "}
        </h2>
        <h3>
          <ul>
            {utilisateur.cours.map((coursId) => (
              <li> {getCours(coursId).titre} </li>
            ))}
          </ul>
        </h3>
      </div>
    </Card>
  );
}

export default Utilisateur;
