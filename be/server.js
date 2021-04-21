const express = require('express');
const cors = require('cors');

const app = express();
const port = 6000;
const hostname = "0.0.0.0";
const usuariosRouter = require('./routes/usuarios');

app.use(cors());
app.use(express.json());
app.use('/usuarios', usuariosRouter);

app.listen(port,hostname, () => {
console.log(`O servidor está rodando na porta: ${port}`);
});