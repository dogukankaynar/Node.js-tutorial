const express = require('express');
const app = express();
const path = require('path');

app.use('/img', express.static(__dirname + '/temp/img'));
app.use('/video', express.static(__dirname + '/temp/video'));
app.use('/css',express.static(__dirname +'/temp/css'));
const indexPath = path.join(__dirname, '/temp/index.html');
app.get('/', (req, res) => {
    res.status(200).sendFile(indexPath)
  })
  

const port = 3000;
app.listen(port, () => {
  console.log(`sunucu ${port} portunda başlatıldı`);
});
