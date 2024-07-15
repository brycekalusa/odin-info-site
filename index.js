const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/', (req, res) => {
    const options = {
        root: path.join(__dirname)
    };

    const fileName = 'index.html';
    res.sendFile(fileName, options, (err) => {
        if (err) {
            console.error('Error sending file:', err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.get('/about', (req, res) => {
    const options = {
        root: path.join(__dirname)
    };

    const fileName = 'about.html';
    res.sendFile(fileName, options, (err) => {
        if (err) {
            console.error('Error sending file:', err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.get('/contact-me', (req, res) => {
    const options = {
        root: path.join(__dirname)
    };

    const fileName = 'contact-me.html';
    res.sendFile(fileName, options, (err) => {
        if (err) {
            console.error('Error sending file:', err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.listen(port, (err) => {
    if (err) console.error(err);
    console.log(`Server is listening on port ${port}`)
});