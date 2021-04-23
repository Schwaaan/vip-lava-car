const express = require('express');
const cors = require('cors');

const app = express();
const port = 8060;
const hostname = "0.0.0.0";
const usuariosRouter = require('./routes/cliente');

app.use(cors());
app.use(express.json());
app.use('/clientes', usuariosRouter);

app.listen(port,hostname, () => {
console.log(`O servidor está rodando na porta: ${port}`);
});