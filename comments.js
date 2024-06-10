// Create web server and listen to port 3000
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.json());

// Read comments from file
const comments = JSON.parse(fs.readFileSync('comments.json'));

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    comments.push(req.body);
    fs.writeFileSync('comments.json', JSON.stringify(comments, null, 2));
    res.status(201).json(req.body);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});