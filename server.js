import config from './config.js'
import apiRouter from './api/index.js'
// import fs from 'fs';

import express from 'express'
const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index', {
        content: 'Hello Express and <em>EJS</em>!'
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

// server.get('/', (req, res) => {
//   fs.readFile('./about.html', (err, data) => {
//     res.send('Hello Express');
//   });
// });

// server.get('/about.html', (req, res) => {
//     res.send('The about page');
//   });

server.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
});


