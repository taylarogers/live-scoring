const express = require('express');
const app = express();

// Host the data on a web server
app.listen(3000, () => console.log('listening at port 3000'));
app.use(express.static('Public'));