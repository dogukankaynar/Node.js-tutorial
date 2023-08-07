const express = require('express');
const app = express();
const path = require('path');

const myLogger = (req, res, next) => {
  console.log('middleware log 1');
  next();
};
//MıddleWare
app.use(express.static('public'));
app.use(myLogger);

const indexPath = path.join(__dirname, '/temp/index.html');
const aboutPath = path.join(__dirname, '/temp/about.html');
const contactPath = path.join(__dirname, '/temp/contact.html');
const videtPath = path.join(__dirname, '/temp/video-page.html');

app.get('/', (req, res) => {
  res.status(200).sendFile(indexPath);
});

app.get('/about.html', (req, res) => {
  res.status(200).sendFile(aboutPath);
});

app.get('/contact.html', (req, res) => {
  res.status(200).sendFile(contactPath);
});

app.get('/video-page.html', (req, res) => {
  res.status(200).sendFile(videtPath);
});

app.get('*', (req, res) => {
  res.status(404).send('<h1>404 Sayfa Bulunamadi</h1>');
});

const port = 3000;
app.listen(port, () => {
  console.log(`sunucu ${port} portunda başlatıldı`);
});
