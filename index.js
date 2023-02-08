const express = require('express');
//const path = require('path');
const app = express();

// Host the data on a web server
app.listen(3000, () => console.log('listening at port 3000'));
//app.use(express.static(path.join(__dirname, '/Public')))
app.use(express.static('Public'));

// Information to be saved to the database
app.post('/api', (request, response) => {
    console.log(request);
});