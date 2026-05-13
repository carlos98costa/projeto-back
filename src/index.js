const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({
    app: 'Projeto Segundo Bimestre - Backend',
    version: process.env.npm_package_version || '1.0.0',
    deployedAt: new Date().toISOString(),
    message: 'API pronta e funcionando.'
  });
});

app.get('/api/message', (req, res) => {
  res.json({ message: 'Backend funcionando! Integração com frontend disponível.' });
});

app.get('/', (req, res) => {
  res.send('Projeto Segundo Bimestre - Backend em execução.');
});

app.listen(port, () => {
  console.log(`Backend rodando em http://localhost:${port}`);
});
