const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

//This is where we import controllers that will route
router
    .route("/trips")
    .get(tripsController.tripsList); 
    //Get method routes tripList

router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode);
    //Get method routes tripsFindByCode

module.exports = router;