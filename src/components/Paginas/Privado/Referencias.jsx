import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import * as ReferenciaServer from "../Servidor/Cliente/ReferenciaServer";
import * as ClienteServer from "../Servidor/Cliente/ClienteServer"

export default function Prestamos() {
    const history = useHistory();

    const referencia = '';
    const listReferencias = '';

    const [cliente, setCliente] = useState([])

    const handleNom = async () => {
        const data = await (await ClienteServer.getCliente(referencia.cliente_id)).json();
        setCliente(data.clientes);
        console.log(data);
    };

    const handleDelete = async (referenciaId) => {
        await ReferenciaServer.deleteReferencia(referenciaId);
        listReferencias();
    };

    useEffect(async () => { await handleNom() }, []);
    return (
        <div className="row">

            <div className="card card-body">
                {/* <h3 className="card-title">{referencia.name}</h3> */}
                <p className="card-text">
                    Personales: <strong></strong>
                </p>
                <p className="card-text" >Bancarias: <strong>{referencia.bancarias_exists.toString()}</strong></p>
                <p className="card-text" >Crediticias: <strong>{referencia.crediticias_exists.toString()}</strong></p>
                <p className="card-text" >Laborales: <strong>{referencia.laborales_exists.toString()}</strong></p>
                <p className="card-text">Referencias de cliente: <strong></strong></p>
                <p className="card-text">Nombre cliente: <strong>{cliente.name + " " + cliente.apellidos}</strong></p>

            </div>

        </div>

    );

}

