require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = Number(process.env.PORT) || 5000;
const version = process.env.VERSION || process.env.npm_package_version || '1.1.0';
const frontendUrl = process.env.FRONTEND_URL;

const allowedOrigins = [
  frontendUrl,
  'http://localhost:4173',
  'http://127.0.0.1:4173',
  'http://localhost:8080',
  'http://127.0.0.1:8080',
].filter(Boolean);

const allowedOriginPatterns = [
  /^https:\/\/.*\.vercel\.app$/,
  /^https:\/\/.*\.app\.github\.dev$/,
];

const corsOptions = {
  origin(origin, callback) {
    if (!origin) {
      return callback(null, true);
    }

    const isAllowed =
      allowedOrigins.includes(origin) ||
      allowedOriginPatterns.some((pattern) => pattern.test(origin));

    if (isAllowed) {
      return callback(null, true);
    }

    return callback(new Error(`Origem CORS não permitida: ${origin}`));
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

const formatDateTime = () => new Date().toLocaleString('pt-BR', {
  dateStyle: 'short',
  timeStyle: 'medium',
});

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    app: 'Projeto Segundo Bimestre - Backend',
    version,
    message: 'API em execução no container Docker ou no Render.',
    routes: ['/v1'],
  });
});

app.get('/v1', (req, res) => {
  res.json({
    message: 'Api v1 respondendo no container docker...',
    chamada_em: formatDateTime(),
  });
});

// Rotas de compatibilidade com a Parte 1
app.get('/api/status', (req, res) => {
  res.json({
    app: 'Projeto Segundo Bimestre - Backend',
    version,
    deployedAt: new Date().toISOString(),
    message: 'API pronta e funcionando.',
  });
});

app.get('/api/message', (req, res) => {
  res.json({
    message: 'Backend funcionando! Integração com frontend disponível.',
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: 'Rota não encontrada',
    path: req.originalUrl,
  });
});

app.listen(port, () => {
  console.log(`Backend rodando em http://localhost:${port}`);
});
