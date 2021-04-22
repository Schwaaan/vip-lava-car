import { Col, Form, Button, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import axios from 'axios';

export default function FormPage() {

    const [name, setName] = useState(null);
    const [telephone, setTelephone] = useState(null);
    const [whats, setWhats] = useState(false);
    const [marca, setMarca] = useState(null);
    const [model, setModel] = useState(null);
    const [ano, setAno] = useState(null);
    const [placa, setPlaca] = useState(null);
    const [value, setDate] = useState(new Date());


    return (
        <Col sm={2}>
            <Form>
                <Form.Group >
                    <Form.Label>Nome Completo</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu nome" required onChange={e => { setName(e.target.value) }} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Telefone para Contato</Form.Label>
                    <Form.Control type="number" placeholder="Digite seu telefone" required onChange={e => { setTelephone(e.target.value) }} />
                </Form.Group>
                <Form.Group >
                    <Form.Check type="checkbox" label="Possui whatssap?" onChange={e => { setWhats(e.target.checked) }} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Marca do carro</Form.Label>
                    <Form.Control type="text" placeholder="Digite a marca do carro" onChange={e => { setMarca(e.target.value) }} />
                </Form.Group>
                <Form.Group  >
                    <Form.Label>Modelo</Form.Label>
                    <Form.Control placeholder="Digite o modelo do carro" type="text" onChange={e => { setModel(e.target.value) }} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Ano</Form.Label>
                    <Form.Control type="number" placeholder="Digite o ano do carro" onChange={e => { setAno(e.target.value) }} />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Placa</Form.Label>
                    <Form.Control type="text" placeholder="Digite a placa do carro" onChange={e => { setPlaca(e.target.value) }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Selecione o dia e horário</Form.Label>
                    <DateTimePicker
                        onChange={setDate}
                        value={value}
                    />
                </Form.Group>
                <Row>
                    <Button variant="primary" onClick={() => {

                        const cliente = {
                            nome: name,
                            telefone: telephone,
                            whatsapp: whats,
                            marca: marca,
                            modelo: model,
                            ano: ano,
                            placa: placa,
                            data: value
                        };

                        axios.post('http://localhost:6000/clientes', cliente).then(res => {
                            console.log(res);
                        }).catch(e => {
                            let msg = "";
                            let erros = e.response.data.erros;
                            for(let s = 0; s < erros.length; s++) {
                                msg += erros[s].msg + "\n";
                            }
                            alert(msg);
                            console.log(e.response.data.erros[0].msg);
                        });
                    }}>
                        Confirmar
                    </Button>
                    <Col sm={2}>
                        <Button variant="primary">
                            Cancelar
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Col>
    );
}