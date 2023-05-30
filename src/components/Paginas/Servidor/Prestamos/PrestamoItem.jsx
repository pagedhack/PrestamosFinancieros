import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import * as PrestamoServer from "./PrestamoServer";
import * as ClienteServer from "../Cliente/ClienteServer"


const PrestamoItem=({ prestamo, listPrestamos })=>{
    const history = useHistory();

const [cliente,setCliente]=useState([])

const handleNom = async () =>  { 
    const data = await (await ClienteServer.getCliente(prestamo.cliente_id)).json();
    setCliente(data.clientes);
    console.log(data);
};

    const handleDelete = async (prestamoId) =>  { 
        await PrestamoServer.deletePrestamo(prestamoId);
        listPrestamos();
    };

    useEffect(async()=>{await handleNom()},[]);

    return (
        <div className="col-md-4">
            <div className="card card-body">
                <h3 className="card-title">{prestamo.name}
                <button onClick={() => history.push(`//updatePrestamo/${prestamo.id}`)} className="ms-2 btn btn-sm btn-info">
                    Modificar
                </button>
                </h3>
                <p className="card-text">Status: <strong>{prestamo.status}</strong></p>
                <p className="card-text">Monto: <strong>{prestamo.monto}</strong></p>
                <p className="card-text">Referecias de pago: <strong></strong></p>
                <p className="card-text">Referencias de cliente: <strong>{prestamo.cliente_id}</strong></p>
                <p className="card-text">Nombre cliente: <strong>{cliente.name + " " + cliente.apellidos}</strong></p>
                <button onClick={() =>prestamo.id && handleDelete(prestamo.id)} className="btn btn-danger my-2" >Eliminar</button>

                {prestamo.status === "Terminado" || prestamo.status === "Activo" ? (
                    <p className="factibilidad-factible">Aprobado</p>
                        ) : (
                    <p className="factibilidad-no-factible"> No Aprobado</p>
                            )
                }
            </div>
        </div>

        
    );


};

export default PrestamoItem;