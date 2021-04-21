const router = require('express').Router();
const { check, body, validationResult } = require('express-validator');
const diaUtil = require('@lfreneda/eh-dia-util');

router.post('/', [
    // nome completo, telefone para contato (opcional) e se este possui WhatsApp; a marca, modelo, ano (opcional) e placa do veículo; e o dia, mês, ano e o horário do agendamento.
    check('nome', 'Nome é campo obrigatório.').trim().escape().notEmpty(),
    check('telefone').trim().escape(),
    check('whatsapp').trim().escape().toBoolean(),
    check('marca', 'Marca é campo obrigatório.').trim().escape().notEmpty(),
    check('modelo', 'Modelo é campo obrigatório.').trim().escape().notEmpty(),
    check('ano', 'Ano deve ser maior que 1950.').trim().escape().optional().isInt({ min: 1950 }).toInt(),
    check('placa', 'Placa é campo obrigatório.').trim().escape().notEmpty(),
    check('data', 'Data é campo obrigatório.').trim().escape().notEmpty().custom((reqData) => {
        const dataAtual = new Date(Date.now());
        const data = new Date(reqData);
        if(diaUtil(data)) {
            return data >= dataAtual        
        }
        return false;
    }).withMessage("Data inválida."),
    check('horario', 'Horário é campo obrigatório.').trim().escape().notEmpty()
], (req, res) => {
    const erros = validationResult(req);
    const usuario = req.body;

    const contexto = {
        usuario: usuario,
        erros: erros.array()
    };
    if (!erros.isEmpty()) {
        return res.status(422).json(contexto);
    } else {
        return res.json(contexto);
    }
});

module.exports = router;