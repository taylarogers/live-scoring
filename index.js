const express = require('express');
const Datastore = require('nedb');
const { SocketAddress } = require('net');
//const path = require('path');
const app = express();

// Host the data on a web server
app.listen(3000, () => console.log('listening at port 3000'));
//app.use(express.static(path.join(__dirname, '/Public')))
app.use(express.static('Public'));
app.use(express.json({ limit: '5mb' }));

const database = new Datastore('scores.db');
database.loadDatabase();

// Information to be saved to the database
app.post('/api', (request, response) => {
    console.log('I got a request!');
    console.log(request.body);
    const data = request.body;

    let updateID = {_id: data._id};

    // Update value, or insert new value
    database.update(updateID, data, {upsert: true});

    response.json({
        status: 'success',
    });
});

// Retrieve information from the database
app.get( '/api', (request, response) => {
    database.find({}, function (err, data) {
        if (err) {
            response.end();
            return;
        }

        response.json(data);
      });
});