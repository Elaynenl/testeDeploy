require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const path = require('path');

const app = express();

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB conectado'))
  .catch((err) => console.error('Erro na conexão com MongoDB:', err));

// Middleware
app.use(express.json());

// Configurar CORS para evitar bloqueios no frontend
app.use(cors({
  origin: "https://teste-deploy-henna.vercel.app" // Permitir apenas chamadas do seu frontend
}));

// Rotas da API
app.use('/api/user', userRoutes);

// Servir arquivos estáticos do frontend (Ajuste o caminho conforme necessário)
app.use(express.static(path.join(__dirname, '../frontend')));

// Exportar o app para Vercel
module.exports = app;