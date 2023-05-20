const HttpErreur = require("../models/http-erreur");

const Etudiant = require("../models/etudiants");

const Stages = require("../models/stages");

const creerStages = async (requete, reponse, next) =>{
    const nouveauStage = new Stage({
        nomContact: requete.body.nomContact,
        courriel: requete.body.courriel,
        numTelephone: requete.body.numTelephone,
        nomEntreprise: requete.body.nomEntreprise,
        adresseEntreprise: requete.body.adresseEntreprise,
        TypeStage: requete.body.TypeStage,
        nbrPosteDispo: requete.body.nbrPosteDispo,
        Description: requete.body.Description,
        remuneration: requete.body.remuneration,
        listeEtudiant: requete.body.listeEtudiant
        
    });

    const resultat = await nouveauStage.save();

    reponse.json(resultat);
}

const getStages = async (requete, reponse, next) =>{

    const stage = await Stages.find().exec();

    reponse.json(stage);
}

exports.getStages = getStages;
exports.creerStages = creerStages;