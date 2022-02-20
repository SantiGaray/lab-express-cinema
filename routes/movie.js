const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie.model")


router.route("/")
    .get((req,res) => {
        Movie.find()
        .then((movies) => {
            res.render("movies", {movies})  
        })
        .catch((err)=> console.log("DB error reading '/movies"))
    })

router.route("/:id")
    .get((req, res) => {
        const id = req.params.id

        Movie.findById(id)
        .then((movie) => {
            console.log(movie);
            res.render("moviedetail", movie)
        })
        .catch((err)=> console.log("DB error"))
    })


module.exports = router;