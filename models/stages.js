const mongoose = require("mongoose");

const stageSchema = new mongoose.Schema({
    nomContact: {type: String, required: true},
    courriel: {type: String, required: true},
    numTelephone: {type: Number, required: true},
    nomEntreprise: {type: String, required: true},
    adresseEntreprise: {type: String, required: true},
    TypeStage: {type: String, enum: ['Réseaux et sécurité', 'Développement dapplications'], required: true},
    nbrPosteDispo: {type: Number, required: true},
    Description: {type: String, required: true},
    remuneration: {type: String, enum: ['salaire horaire', 'montant unique', 'aucune rémunération'], required: true},
    listeEtudiant: [{type: mongoose.Types.ObjectId, required: false, ref:"etudiants"}]
});

module.exports = mongoose.model("stages", stageSchema);