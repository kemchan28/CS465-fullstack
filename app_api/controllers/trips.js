const mongoose = require('mongoose');
const Trip = require('. ./models/travlr'); //Register model
const Model = mongoose.model('trips'); //Get model

//GET: /trips - list of all the trips 
//Regardless of outcome, response must include HTML status code
//and JSON message to the requesting data
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) //Filter by code
        .exec();

    if(!q){ //Database return no data
        return res
            .status(404)
            .json({error: "No trips found"});
    } else {
        return res
            .status(200)
            .json(q);
    }
};

const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code': req.params.tripCode})
        .exec();

    if(!q){
        return res
            .status(404)
            .json({error: "Trip not found"});
    } else {
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};