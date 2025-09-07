const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'application d\'intégration Cloud Agriculture !');
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});