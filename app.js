const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (_, res) => res.render('pages/index'));

app.get('/about', (_, res) =>
  res.render('pages/about', { title: 'About Lily' })
);

app.get('/contact-me', (_, res) =>
  res.render('pages/contact-me', { title: 'Contact Me' })
);

app.get('*', (_, res) => res.render('pages/404', { title: 'Not Found' }));

const PORT = 3000;

app.listen(3000, () => console.log('App listening on port: ' + PORT));
