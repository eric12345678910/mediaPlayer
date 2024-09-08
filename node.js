// Import file system module
const fs = require('fs');

// Import express from npm
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// serve static files from 'public'
app.use(express.static(path.join(__dirname, 'public')));

// serve static files from 'public/audio'
app.use('/audio', express.static(path.join(__dirname, 'public/audio')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/files', (req, res) => {
    const directoryPath = path.join(__dirname, 'public/audio');
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to read directory' });
        }
        res.json(files.filter(file => file.endsWith('.wav'))); // filter .wav files
    });
});

app.listen(port, () => {
    console.log('Server is running on http://localhost:' + port);
});

