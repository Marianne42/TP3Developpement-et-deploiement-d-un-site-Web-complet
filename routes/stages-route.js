const express = require("express");

const controleursStages = require("../controlers/controlStages")
const router = express.Router();

router.post('/stages', controleursStages.creerStages)

router.get('/stages', controleursStages.getStages)

//router.get('/stages/:etudiantId', controleursStages.getEtudiantById)

//router.patch('/stages', controleursStages.updateEtudiant)

//router.delete('/stages', controleursStages.supprimerEtudiant)

//router.patch('/inscription', controleursStages.inscrireEtudiant)

module.exports = router;