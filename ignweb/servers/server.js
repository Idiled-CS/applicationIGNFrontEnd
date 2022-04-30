var express = require('express');
var cors = require('cors');
const axios = require('axios');

var app = express();

app.use(cors());

const URL = "https://ign-apis.herokuapp.com/videos/";

// Get Request
app.get('/', (req, res) => {
    const endpoint = '?startIndex=' + req.query.startIndex + '&count='+ req.query.count;
    axios.get(URL + endpoint)
        .then(response => {
            res.send(response.data);
        }).catch(e => {
            console.log(e)
        })
})
console.log('server started')

app.listen(8080, function() {
    console.log("Server started on port 8080");
});//localhost:8080`

