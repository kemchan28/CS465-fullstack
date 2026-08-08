const express = require('express');
const router = express.Router();

//imports the controllers to route
const tripsController = require('../controllers/trips');

//define the routes for the trips endpoint
router
    .route("/trips")
    .get(tripsController.tripsList) //Get method routes tripList
    .post(tripsController.tripsAddTrip); //Post method routes tripsAddTrip

//GET Method routes tripsFindByCode = requires parameter
router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip); //PUT method routes tripsUpdateTrip

module.exports = router;