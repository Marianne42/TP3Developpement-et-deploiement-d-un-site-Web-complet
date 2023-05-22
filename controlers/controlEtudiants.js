const HttpErreur = require("../models/http-erreur");

const Etudiant = require("../models/etudiants");

const stages = require("../models/stages");


/*const getEtudiantById = async (requete, reponse, next) => {
  const etudiantId = requete.params.etudiantId;
  let etudiant;
  try {
    etudiant = await Etudiant.findById(etudiantId);
  } catch (err) {
    return next(
      new HttpErreur("Erreur lors de la récupération de l'etudiant", 500)
    );
  }
  if (!etudiant) {
    return next(new HttpErreur("Aucun etudiant trouvée pour l'id fourni", 404));
  }
  reponse.json({ etudiant: etudiant.toObject({ getters: true }) });
};*/

const creerEtudiant = async (requete, reponse, next) =>{
    const nouveauEtudiant = new Etudiant({
        NumDa: requete.body.NumDa,
        nom: requete.body.nom,
        courriel: requete.body.courriel,
        profilSortie: requete.body.profilSortie,
        idStage: requete.body.idStage
        
    });

    const resultat = await nouveauEtudiant.save();
    
    reponse.json(resultat);
}


const getEtudiant = async (requete, reponse, next) =>{

    const etudiants = await Etudiant.find().exec();

    reponse.json(etudiants);
}

const updateEtudiant = async (requete, reponse, next) => {
    const { nom } = requete.body;
    const etudiantId = requete.body.etudiantId;
  
    let etudiant;
  
    try {
      etudiant = await Etudiant.findById(etudiantId);
      etudiant.nom = nom;
      await etudiant.save();
    } catch {
      return next(
        new HttpErreur("Erreur lors de la mise à jour de l'etudiant", 500)
      );
    }
  
    reponse.status(200).json({ etudiant: etudiant.toObject({ getters: true }) });
  };

  const inscrireEtudiant = async (requete, reponse, next) => {
    const { stage, etudiantId } = requete.body;
    let etudiant;
    let stageInscrit;
    try {
      stageInscrit = await stages.findById(stage);
      if (stageInscrit.listeEtudiants.length >= stageInscrit.nbrPosteDispo){
        
        throw new Error("too much etudiants")
                
      }
      etudiant = await Etudiant.findById(etudiantId);
      if(etudiant.idStage != null){
        throw new Error("Deja Stage")
      }
    } catch (err){
      switch(err.message){
        case "Deja Stage": 
        return next(
          new HttpErreur("A deja un stage", 500)
        );
        case "too much etudiants": 
        return next(
          new HttpErreur("Trop d'étudiants dans le stage", 500)
        );
        default:
          return next(
          new HttpErreur("Erreur lors de la mise à jour du stage", 500)
        );
      }
    }
    
    try {
      stageInscrit = await stages.findById(stage);

      if (stageInscrit.listeEtudiants.length >= stageInscrit.nbrPosteDispo){
        
        throw new Error("too much etudiants")
                
      }
      
      stageInscrit.listeEtudiants.push(etudiantId);
      await stageInscrit.save();
    } catch (err) {
      switch(err.message){
        case "too much etudiants": 
        return next(
          new HttpErreur("Trop d'étudiants dans le stage", 500)
        );
        default:
          return next(
          new HttpErreur("Erreur lors de la mise à jour du stage", 500)
        );
      }
      
    }

    try {
      
      etudiant = await Etudiant.findById(etudiantId);
      if(etudiant.idStage != null){
        throw new Error("Deja Stage")
      }
      etudiant.idStage = stage;

      await etudiant.save();
    } catch (err) {
      switch(err.message){
        case "Deja Stage": 
        return next(
          new HttpErreur("A deja un stage", 500)
        );
        default:
        return next(
          new HttpErreur("Erreur lors de la mise à jour de l'etudiant", 500)
        );
      }
    }

    
  
    reponse.status(200).json({ etudiant: etudiant.toObject({ getters: true }) });
  };

  /*const supprimerEtudiant = async (requete, reponse, next) => {
    const etudiantId = requete.params.etudiantId;
    let etudiant;
    try {
        etudiant = await etudiant.findById(etudiantId).populate("createur");
    } catch {
      return next(
        new HttpErreur("Erreur lors de la suppression de l'etudiant", 500)
      );
    }
    if(!etudiant){
      return next(new HttpErreur("Impossible de trouver l'etudiant", 404));
    }
  
    try{
  
      
      await etudiant.remove();
      etudiant.createur.etudiant.pull(etudiant);
      await etudiant.createur.save()
  
    }catch{
      return next(
        new HttpErreur("Erreur lors de la suppression de l'etudiant", 500)
      );
    }
    reponse.status(200).json({ message: "Etudiant supprimée" });
  };*/

  exports.creerEtudiant = creerEtudiant;
  exports.getEtudiant = getEtudiant;
  exports.supprimerEtudiant = supprimerEtudiant;
  exports.updateEtudiant = updateEtudiant;
  exports.getEtudiantById = getEtudiantById;
  exports.inscrireEtudiant = inscrireEtudiant;