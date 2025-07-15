const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.json()); // Necessario per leggere il body delle POST

app.use(express.static(__dirname));
app.use('/assets', express.static(path.join(__dirname, 'assets')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});


app.listen(3000, () => {
  console.log('Server attivo su http://localhost:3000');
});