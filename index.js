const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello from Jenkins!</h1> <h2>Sample app</h2>');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
