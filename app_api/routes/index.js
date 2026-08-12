const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken'); // Enable JSON Web Tokens

//imports the controllers to route
const tripsController = require('../controllers/trips');
const authController = require( '../controllers/authentication');

router.route('/register').post(authController.register);
router.route('/login').post(authController.login);

//define the routes for the trips endpoint
router
    .route("/trips")
    .get(tripsController.tripsList) //Get method routes tripList
    .post(authenticateJWT, tripsController.tripsAddTrip); //Post method routes tripsAddTrip

//GET Method routes tripsFindByCode = requires parameter
router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode)
    .put(authenticateJWT, tripsController.tripsUpdateTrip); //PUT method routes tripsUpdateTrip

// define route for login endpoint
router
    .route('/login')
    .post(authController.login);

module.exports = router;