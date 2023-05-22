const HttpErreur = require("../models/http-erreur");

const Etudiant = require("../models/etudiants");

const Stages = require("../models/stages");
const stages = require("../models/stages");

const creerStages = async (requete, reponse, next) =>{
    const nouveauStage = new Stages({
        nomContact: requete.body.nomContact,
        courriel: requete.body.courriel,
        numTelephone: requete.body.numTelephone,
        nomEntreprise: requete.body.nomEntreprise,
        adresseEntreprise: requete.body.adresseEntreprise,
        TypeStage: requete.body.TypeStage,
        nbrPosteDispo: requete.body.nbrPosteDispo,
        Description: requete.body.Description,
        remuneration: requete.body.remuneration,
        listeEtudiants: requete.body.listeEtudiants
        
    });

    const resultat = await nouveauStage.save();

    reponse.json(resultat);
}

const getStages = async (requete, reponse, next) =>{

    const stage = await Stages.find().exec();

    reponse.json(stage);
}

const updateStage = async (requete, reponse, next) => {
    const { courriel, numTelephone, Description } = requete.body;
    const stageId = requete.body.stageId;
  
    let stage;
  
    try {
        stage = await Stages.findById(stageId);
        stage.courriel = courriel;
        stage.numTelephone = numTelephone;
        stage.Description = Description;
      await stage.save();
    } catch {
      return next(
        new HttpErreur("Erreur lors de la mise à jour de l'etudiant", 500)
      );
    }
  
    reponse.status(200).json({ stage: stage.toObject({ getters: true }) });
  };

  const supprimerStage = async (requete, reponse, next) => {
    const stageId = requete.params.stageId;
    let stage;
    try {
        stage = await stage.findById(stageId).populate("createur");
    } catch {
      return next(
        new HttpErreur("Erreur lors de la suppression de l'etudiant", 500)
      );
    }
    if(!stage){
      return next(new HttpErreur("Impossible de trouver l'etudiant", 404));
    }
  
    try{
  
      
      await stage.remove();
      stage.createur.stage.pull(stage);
      await stage.createur.save()
  
    }catch{
      return next(
        new HttpErreur("Erreur lors de la suppression de l'etudiant", 500)
      );
    }
    reponse.status(200).json({ message: "Etudiant supprimée" });
  };



exports.getStages = getStages;
exports.creerStages = creerStages;
exports.updateStage = updateStage;
exports.supprimerStage = supprimerStage;