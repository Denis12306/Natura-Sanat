const express = require("express");

const router = express.Router();

const searchController = require("../controllers/search.controller");

// Envoie aux routes pour la recherche
router.get("/", searchController.search);

module.exports = router;
