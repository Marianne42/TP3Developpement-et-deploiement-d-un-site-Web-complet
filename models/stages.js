const mongoose = require("mongoose");

const stageSchema = new mongoose.Schema({
    nomContact: {type: String, required: true},
    courriel: {type: String, required: true},
    numTelephone: {type: Number, required: true},
    nomEntreprise: {type: String, required: true},
    adresseEntreprise: {type: String, required: true},
    TypeStage: {type: String, required: true},
    nbrPosteDispo: {type: Number, required: true},
    Description: {type: String, required: true},
    remuneration: {type: String, required: true}
});

module.exports = mongoose.model("stages", stageSchema);