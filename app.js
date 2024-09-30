const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (_, res) => res.render('pages/index'));

app.get('/about', (_, res) =>
  res.sendFile('./about.html', { root: __dirname })
);

app.get('/contact-me', (_, res) =>
  res.sendFile('./contact-me.html', { root: __dirname })
);

app.get('*', (_, res) => res.sendFile('./404.html', { root: __dirname }));

const PORT = 3000;

app.listen(3000, () => console.log('App listening on port: ' + PORT));
