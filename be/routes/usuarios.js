const router = require('express').Router();
const { check, body, validationResult } = require('express-validator');

router.post('/', [
    // nome completo, telefone para contato (opcional) e se este possui WhatsApp; a marca, modelo, ano (opcional) e placa do veículo; e o dia, mês, ano e o horário do agendamento.
    check('nome', 'Nome é campo obrigatório.').trim().escape().isEmpty(),
    check('telefone').trim().escape(),
    check('whatsapp').trim().escape().toBoolean(),
    check('marca', 'Marca é campo obrigatório.').trim().escape().isEmpty(),
    check('modelo', 'Modelo é campo obrigatório.').trim().escape().isEmpty(),
    check('ano', 'Ano deve ser maior que 1950.').trim().escape().optional().isInt({ min: 1950 })toInt(),
    check('placa', 'Placa é campo obrigatório.').trim().escape().isEmpty(),
    check('data', 'Data é campo obrigatório.').trim().escape().isEmpty().toDate().custom((value) => {
        return value >= Date.now(); // testar se funciona e se funcionar certificar qual é essa data - Servidor ou a do usuário.
    }),
    check('horario', 'Horário é campo obrigatório.').trim().escape().isEmpty()
], (req, res) => {
    const erros = validationResult(req);
    const usuario = req.body;
    const contexto = {
        usuario: usuario,
        erros: erros.array()
    };
    if (!erros.isEmpty()) {
        return res,status(422).json(contexto);
    } else {
        return res.json(contexto);
    }
});

module.exports = router;