const mongoose = require("mongoose");

const etudiantsSchema = new mongoose.Schema({
    NumDa: {type: Number, required: true},
    nom: {type: String, required: true},
    courriel: {type: String, required: true},
    profilSortie: {type: String, required: true},
    idStage: {type: mongoose.Types.ObjectId, required: true}    
});

module.exports = mongoose.model("etudiants", etudiantsSchema);