const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('server up and running at http://localhost:3000');
})