// GET /app                  -> go the dashboard
// GET /app/addpatient       -> go to addPatient page

const express = require('express');
const router = express.Router();
const axios = require("axios");
const fetch = require("node-fetch");

//var {scoreOfDisease, Disease} = require('./../server/models/diseases.js');
//var {Patient} = require('./../server/models/patient.js');
//var {rooms, Room} = require('./../server/models/rooms');

/*
    GET /app/ -> simply render the page
*/
router.get('/app', (req, res) => {
  fetchUsers();
  res.status(200).render('hospitals');
});

function fetchUsers() {
  // Where we're fetching data from
  fetch(`https://api.grid-nigeria.org/hospital-facilities`)
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(data =>
      this.setState({
        hospital_facilities: data,
        isLoading: false,
      })
    )
    // Catch any errors we hit and update the app
    .catch(error => this.setState({ error, isLoading: false }));
}

module.exports = router;
