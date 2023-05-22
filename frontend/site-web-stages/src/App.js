import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "./shared/Navigation/MainNavigation";
import Accueil from "./Accueil";
import "./Accueil.css";
import Deroulement from "./Deroulement";
import "./Deroulement.css"
import FAQ from "./FAQ";
import "./FAQ.css"
import ProfileMore from "./ProfileMore";
import "./ProfileMore.css"
import FormulaireEmployeur from "./FormulaireEmployeur";
import "./FormulaireEmployeur"


export var COURS;
export var set_COURS;
export var setProfesseurs;
export var professeurs;

function App() {
  

  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Accueil />
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
